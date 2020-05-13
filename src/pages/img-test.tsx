import React from "react"
import { graphql } from "gatsby"
import { ImgTestQuery } from "../../types/graphql-types"

const ImgTest: React.FC<{ data: ImgTestQuery }> = ({ data }) => {
  const { allContentfulAsset } = data
  const list = allContentfulAsset.edges.map(({ node }, i) => (
    <li key={i}>{node?.file?.url ? <img src={node?.file?.url} /> : null}</li>
  ))
  return <ul>{list}</ul>
}

export const query = graphql`
  query ImgTest {
    allContentfulAsset(
      filter: { file: { contentType: { eq: "image/svg+xml" } } }
    ) {
      edges {
        node {
          file {
            url
          }
        }
      }
    }
  }
`

export default ImgTest
