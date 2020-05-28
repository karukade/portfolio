import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import SkillTagList from "../skillTagList"
import List from "../list"
import Description from "../description"

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
        {description?.description ? (
          <Description json={description.description} />
        ) : null}
        <dl className={styles.features}>
          <dt className={styles.featuresTtl}>
            <span>⚙</span>機能
          </dt>
          <dd className={styles.featuresContents}>
            <ul>
              <List items={features} />
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default Card
