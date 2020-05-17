import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import style from "./style.module.scss"

type Skills = { hobby: JSX.Element[]; job: JSX.Element[] }

const Side: React.FC<{ person: IndexQuery["contentfulPerson"] }> = ({
  person,
}) => {
  const skills = person?.skill?.reduce(
    (skills: Skills, skill, index) => {
      if (!skill?.name) return skills
      const key = skill?.onlyHobby ? "hobby" : "job"
      skills[key].push(<li key={index}>{skill.name}</li>)
      return skills
    },
    { hobby: [], job: [] }
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
          <h3>
            <span className={style.emoji}>🛠</span>職歴
          </h3>
          <ul>
            {person?.jobHistory?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={style.section}>
          <h3>
            <span>💪</span>スキルセット
          </h3>
          <dl>
            <dt>実務</dt>
            <dd>
              <ul>{skills?.job}</ul>
            </dd>
          </dl>
          <dl>
            <dt>趣味</dt>
            <dd>
              <ul>{skills?.hobby}</ul>
            </dd>
          </dl>
        </section>
      </div>
    </div>
  )
}

export default Side
