import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import SkillTagList from "../skillTagList"

type Work = IndexQuery["job"]["nodes"][number] // todo 妙な書き方。。

const Card: React.FC<{ work: Work | void }> = ({ work }) => {
  if (!work) return null
  const { title, description, features, skills } = work
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h4 className={styles.title}>{title}</h4>
        {skills ? <SkillTagList skills={skills} /> : null}
      </div>
      <div>
        <p>{description?.description}</p>
        <dl>
          <dt>機能</dt>
          <dd>
            <ul>
              {features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default Card
