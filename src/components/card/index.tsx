import React from "react"
import { PostFragment } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import SkillTagList from "../skillTagList"
import Btn from "../btn"
import BtnList from "../btnList"
import List from "../list"

type Work = PostFragment

const Card: React.FC<{ work: Work | void }> = ({ work }) => {
  if (!work) return null
  const { title, description, features, skills, github, site } = work
  const descHtml = description?.childContentfulRichText?.html
  const exLinks =
    github || site ? (
      <BtnList>
        {github ? (
          <Btn href={github} target="_blank" icon="github">
            Github
          </Btn>
        ) : null}
        {site ? (
          <Btn href={site} target="_blank">
            Site
          </Btn>
        ) : null}
      </BtnList>
    ) : null
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h4 className={styles.title}>{title}</h4>
        {skills ? <SkillTagList skills={skills} /> : null}
      </div>
      <div>
        {descHtml ? (
          <div dangerouslySetInnerHTML={{ __html: descHtml }}></div>
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
        {exLinks}
      </div>
    </div>
  )
}

export default Card
