import React from "react"
import styles from "./style.module.scss"

const List: React.FC<{
  items?: any[] | null
  tag?: keyof JSX.IntrinsicElements
}> = ({ items, tag = "li" }) => {
  if (!items) return null
  const Item = tag
  const List = tag === "li" ? "ul" : "div"
  const elms = items.map(item => (
    <Item className={styles.item} key={item}>
      {item}
    </Item>
  ))
  return <List>{elms}</List>
}

export default List
