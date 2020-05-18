import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import List from "../list"
import SkillTag from "../skillTag"
import ListInline from "../listInline"
import TitleEmoji from "../ttlEmoji"
import style from "./style.module.scss"
import { IconNames } from "../icons"

type PropsType = {
  person: IndexQuery["contentfulPerson"]
  skills: [IndexQuery["skillHobby"], IndexQuery["skillJob"]]
}

const Side: React.FC<PropsType> = ({ person, skills }) => {
  const [hobby, job] = skills.map(({ edges }) =>
    edges.map(({ node }) => (
      <SkillTag
        key={node.key as string}
        name={node.key as IconNames}
        label={node.name as string}
      />
    ))
  )
  return (
    <div>
      <div className={style.contents}>
        <div className={style.section}>
          <span className={style.emoji}>👶</span>
          {person?.birthday}
          <p>{person?.shortBio?.shortBio}</p>
        </div>
        <section className={style.section}>
          <TitleEmoji emoji="💪">スキルセット</TitleEmoji>
          <dl className={style.skillList}>
            <dt className={style.skillListTtl}>仕事</dt>
            <dd>
              <ListInline items={job} />
            </dd>
          </dl>
          <dl className={style.skillList}>
            <dt className={style.skillListTtl}>趣味</dt>
            <dd>
              <ListInline items={hobby} />
            </dd>
          </dl>
        </section>
        {/* <section className={style.section}>
          <TitleEmoji emoji="🛠">職歴</TitleEmoji>
          <List items={person?.jobHistory} />
        </section> */}
      </div>
    </div>
  )
}

export default Side
