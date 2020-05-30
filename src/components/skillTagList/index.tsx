import React from "react"
import { graphql } from "gatsby"
import { SkillFragment, Maybe } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import SkillTag from "../skillTag"
import { IconNames } from "../skillIcons"

type Skills = Maybe<SkillFragment>[]
const SkillTagList: React.FC<{
  skills: Skills
}> = ({ skills }) => {
  if (!skills) return null
  const items = skills.map((skill, i) => {
    if (!skill?.id) return null
    return (
      <li key={i} className={styles.listItem}>
        <SkillTag
          key={skill.id as string}
          name={skill.key as IconNames}
          label={skill.name as string}
        />
      </li>
    )
  })
  return <ul className={styles.list}>{items}</ul>
}

export default SkillTagList
export const query = graphql`
  fragment Skill on ContentfulSkill {
    id
    name
    key
  }
`
