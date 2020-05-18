import React from "react"
import styles from "./style.module.scss"

const ListInline: React.FC<{
  items: React.ReactNode[] | void
}> = ({ items }) => {
  if (!items) return null
  const itemLists = items.map((item, i) => (
    <li key={i} className={styles.listItem}>
      {item}
    </li>
  ))
  return <ul className={styles.list}>{itemLists}</ul>
}

export default ListInline
