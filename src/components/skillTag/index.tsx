import React from "react"
import styles from "./style.module.scss"
import Icon, { IconNames } from "../skillIcons"

const SkillTag: React.FC<{
  name: IconNames
  label: string
}> = ({ name, label }) => {
  return (
    <span className={styles.tag}>
      <Icon name={name} />
      {label}
    </span>
  )
}

export default SkillTag
