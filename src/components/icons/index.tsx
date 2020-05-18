import React from "react"
import styles from "./style.module.scss"

const Icons: React.FC<{ name: keyof typeof styles }> = props => {
  return <i className={`${styles[props.name]} ${styles.icon}`}></i>
}

export type IconNames = Exclude<keyof typeof styles, "icon">
export default Icons
