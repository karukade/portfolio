import React from "react"
import styles from "./style.module.scss"

const Component: React.FC<{ name: keyof typeof styles }> = props => {
  return <i className={`${styles[props.name]} ${styles.icon}`}></i>
}

export default Component
