import React from "react"
import styles from "./style.module.scss"

const BtnList: React.FC = ({ children }) => (
  <div className={styles.btnList}>{children}</div>
)

export default BtnList
