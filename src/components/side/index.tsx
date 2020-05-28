import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import SkillTagList from "../skillTagList"
import TitleEmoji from "../ttlEmoji"
import style from "./style.module.scss"

type PropsType = {
  person: IndexQuery["contentfulPerson"]
  skills: {
    hobby: IndexQuery["skillHobby"]["nodes"]
    job: IndexQuery["skillJob"]["nodes"]
  }
}

const Side: React.FC<PropsType> = ({ person, skills: { hobby, job } }) => {
  return (
    <div>
      <div className={style.contents}>
        <div className={style.section}>
          <TitleEmoji emoji="🦑">HELLOWORLD</TitleEmoji>
          <p>{person?.shortBio?.shortBio}</p>
        </div>
        <section className={style.section}>
          <TitleEmoji emoji="💪">スキルセット</TitleEmoji>
          <dl className={style.skillList}>
            <dt className={style.skillListTtl}>仕事</dt>
            <dd>
              <SkillTagList skills={job} />
            </dd>
          </dl>
          <dl className={style.skillList}>
            <dt className={style.skillListTtl}>趣味</dt>
            <dd>
              <SkillTagList skills={hobby} />
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
