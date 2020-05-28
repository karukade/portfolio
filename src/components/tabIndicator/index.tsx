import React from "react"
import styles from "./style.module.scss"

type ProsType = {
  style: React.CSSProperties
}

const TabIndicator: React.FC<ProsType> = ({ style }) => {
  return <div style={style} className={styles.tabIndicator}></div>
}

export default TabIndicator
