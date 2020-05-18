import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import SkillTag from "../skillTag"

type Work = IndexQuery["job"]["edges"][number]["node"] // todo 妙な書き方。。

const Card: React.FC<{ work: Work | void }> = ({ work }) => {
  if (!work) return null
  const { title, description, features, skills } = work
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <ul>
          {skills?.map((item, i) => (
            <li key={item?.key ? item?.key : i}>
              <SkillTag name={item?.key} label={item?.name} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>{description?.description}</p>
        <ul>
          {features?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
