import React from "react"
import { graphql } from "gatsby"
import { IndexQuery } from "../../types/graphql-types"
import Layout from "../components/layout"
import Side from "../components/side"
import Main from "../components/main"
import Head from "../components/head"

const Component: React.FC<{ data: IndexQuery }> = ({ data }) => {
  const {
    contentfulPerson,
    skillJob,
    skillHobby,
    hobby: { nodes: hobby },
    job: { nodes: job },
  } = data

  const sideProps = {
    person: contentfulPerson,
    skills: {
      hobby: skillHobby.nodes,
      job: skillJob.nodes,
    },
  }

  const MainProps = {
    works: {
      hobby,
      job,
    },
  }

  const layout = {
    side: <Side {...sideProps} />,
    main: <Main {...MainProps} />,
  }

  return (
    <div>
      <Head />
      <Layout {...layout} />
    </div>
  )
}

export const query = graphql`
  query Index {
    contentfulPerson(contentful_id: { eq: "NOQfNIPuol8Rzim3xSmhZ" }) {
      name
      shortBio {
        shortBio
      }
      github
      birthday
      jobHistory
    }

    skillHobby: allContentfulSkill(filter: { onlyHobby: { eq: true } }) {
      nodes {
        ...Skill
      }
    }
    skillJob: allContentfulSkill(filter: { onlyHobby: { eq: false } }) {
      nodes {
        ...Skill
      }
    }
    hobby: allContentfulPost(
      filter: { isJob: { eq: false } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      nodes {
        ...Post
      }
    }
    job: allContentfulPost(
      filter: { isJob: { eq: true } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      nodes {
        ...Post
      }
    }
  }
`

export default Component
