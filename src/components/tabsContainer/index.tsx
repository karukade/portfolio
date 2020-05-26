import React from "react"
import styles from "./style.module.scss"

const Tabs: React.FC = ({ children }) => (
  <div className={styles.tabsWrap}>
    <div className={styles.tabs}>{children}</div>
  </div>
)

export default Tabs
