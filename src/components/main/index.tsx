import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import Card from "../card"

const Main: React.FC<{
  works: {
    hobby: IndexQuery["hobby"]
    job: IndexQuery["job"]
  }
}> = ({ works }) => {
  if (!works) return null
  const { hobby, job } = works
  return (
    <div>
      <h2>つくったもの</h2>
      <ul>
        <li>趣味</li>
        <li>仕事(抜粋)</li>
      </ul>
      <div>
        {hobby.edges.map(({ node }) => (
          <Card key={node.title} work={node} />
        ))}
      </div>
      <div>
        {job.edges.map(({ node }) => (
          <Card key={node.title} work={node} />
        ))}
      </div>
    </div>
  )
}

export default Main
