import React from "react"
import {
  PostFragment,
  ContentfulPostFieldsParsedLinks,
} from "../../../types/graphql-types"
import styles from "./style.module.scss"
import SkillTagList from "../skillTagList"
import Btn from "../btn"
import BtnList from "../btnList"
import List from "../list"
import Thumbnail from "../thumbnail"

const createExLinks = (links: ContentfulPostFieldsParsedLinks[]) => {
  const btns = links.map((link, idx) => {
    const { value, link: url } = link
    return value && url ? (
      <Btn key={idx} href={url} target="_blank" icon={value}>
        {value}
      </Btn>
    ) : null
  })
  return <BtnList>{btns}</BtnList>
}

const Card: React.FC<{ work: PostFragment | void }> = ({ work }) => {
  if (!work) return null
  const { title, description, features, skills, video, img, fields } = work
  const descHtml = description?.childContentfulRichText?.html
  const exLinks = fields?.parsedLinks
    ? createExLinks(fields.parsedLinks as ContentfulPostFieldsParsedLinks[])
    : null
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h4 className={styles.title}>{title}</h4>
        {skills ? <SkillTagList skills={skills} /> : null}
        {video || img ? (
          <div className={styles.thumbnail}>
            <Thumbnail img={img} video={video} />
          </div>
        ) : null}
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

export default React.memo(Card)
