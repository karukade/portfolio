import React from "react"
import { graphql } from "gatsby"
import { IndexQuery } from "../../types/graphql-types"
import Layout from "../components/layout"
import Side from "../components/side"
import Head from "../components/head"

const Main = () => <div>Main</div>

const Component: React.FC<{ data: IndexQuery }> = ({ data }) => (
  <div>
    <Head />
    <Layout side={<Side person={data.contentfulPerson} />} main={<Main />} />
  </div>
)

export const query = graphql`
  query Index {
    contentfulPerson(contentful_id: { eq: "NOQfNIPuol8Rzim3xSmhZ" }) {
      name
      shortBio {
        shortBio
      }
      skill {
        name
        onlyHobby
      }
      github
      birthday
      jobHistory
    }
    allContentfulPost {
      edges {
        node {
          features
          skills {
            name
          }
          title
          description {
            description
          }
          isJob
        }
      }
    }
  }
`

export default Component
