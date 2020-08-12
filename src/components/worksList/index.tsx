import React, { useMemo } from "react"
import Card from "../card"
import styles from "./style.module.scss"
import { PostFragment } from "../../../types/graphql-types"

const getCards = (items: PostFragment[]) =>
  items.map(item => (item.id ? <Card key={item.id} work={item} /> : null))

const WorksList: React.FC<{ works: PostFragment[] }> = ({ works }) => {
  const ListItems = useMemo(() => getCards(works), [works])
  return <div className={styles.worksList}>{ListItems}</div>
}

export default WorksList
