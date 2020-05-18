import React from "react"
import { graphql } from "gatsby"
import { IndexQuery } from "../../types/graphql-types"
import Layout from "../components/layout"
import Side from "../components/side"
import Main from "../components/main"
import Head from "../components/head"

const Component: React.FC<{ data: IndexQuery }> = ({ data }) => (
  <div>
    <Head />
    <Layout
      side={
        <Side
          person={data.contentfulPerson}
          skills={[data.skillHobby, data.skillJob]}
        />
      }
      main={<Main works={{ hobby: data.hobby, job: data.job }} />}
    />
  </div>
)

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
      edges {
        node {
          name
          key
        }
      }
    }

    skillJob: allContentfulSkill(filter: { onlyHobby: { eq: false } }) {
      edges {
        node {
          name
          key
        }
      }
    }

    hobby: allContentfulPost(filter: { isJob: { eq: false } }) {
      edges {
        node {
          title
          description {
            description
          }
          features
          skills {
            key
            name
          }
        }
      }
    }

    job: allContentfulPost(filter: { isJob: { eq: true } }) {
      edges {
        node {
          title
          description {
            description
          }
          features
          skills {
            key
            name
          }
        }
      }
    }
  }
`

export default Component
