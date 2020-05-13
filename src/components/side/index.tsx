import React from "react"
import { IndexQuery } from "../../../types/graphql-types"
import style from "./style.module.scss"
import ArrowIcon from "../../images/ico-arrow.svg"

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
      <header className={style.header}>
        <h1 className={style.headerLogo}>嘉手苅志朗 Shiro Kadekaru</h1>
        <span className={style.headerClose}>
          <svg viewBox={ArrowIcon.viewBox}>
            <use xlinkHref={`#${ArrowIcon.id}`} />
          </svg>
        </span>
      </header>
      <div className={style.contents}>
        <div>
          {person?.birthday}
          <p>{person?.shortBio?.shortBio}</p>
        </div>
        <section>
          <h3>
            <span>🛠</span>職歴
          </h3>
          <ul>
            {person?.jobHistory?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
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
