import React, { useState, useCallback, useMemo } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { IndexQuery, PostFragment } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import transitionStyles from "./transition.module.scss"
import Card from "../card"
import Tabs from "../tabs"

const getCards = (items: PostFragment[]) =>
  items.map(item => (item.id ? <Card key={item.id} work={item} /> : null))

const tabItems = ["💸趣味", "💰仕事（抜粋）"]

const Main: React.FC<{
  works: {
    hobby: IndexQuery["hobby"]["nodes"]
    job: IndexQuery["job"]["nodes"]
  }
}> = ({ works }) => {
  if (!works) return null
  const { hobby, job } = works
  const [index, setIndex] = useState(0)
  const hobbyWorks = useMemo(() => {
    return getCards(hobby)
  }, [hobby])
  const jobWorks = useMemo(() => {
    return getCards(job)
  }, [job])
  const onClick = useCallback((i: number) => {
    setIndex(i)
  }, [])
  return (
    <div>
      <h2 className={styles.title}>つくったもの</h2>
      <Tabs items={tabItems} onClick={onClick} value={index} />
      <SwitchTransition>
        <CSSTransition
          key={index === 0 ? "hobby" : "job"}
          timeout={50}
          classNames={transitionStyles}
        >
          <div>{index === 0 ? hobbyWorks : jobWorks}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default Main
