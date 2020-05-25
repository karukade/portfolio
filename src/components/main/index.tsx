import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group"
import classnames from "classnames"
import { IndexQuery, PostFragment } from "../../../types/graphql-types"
import styles from "./style.module.scss"
import transitionStyles from "./transition.module.scss"
import Card from "../card"
import Tabs from "../tabs"

interface CSSTransitionClassNames {
  appear?: string
  appearActive?: string
  appearDone?: string
  enter?: string
  enterActive?: string
  enterDone?: string
  exit?: string
  exitActive?: string
  exitDone?: string
}

const getCards = (items: PostFragment[]) =>
  items.map(item => (item.id ? <Card key={item.id} work={item} /> : null))

const dynamicChildFactory = <T extends CSSTransitionClassNames>(
  classNames: T
) => (child: React.ReactElement<{ classNames: T }>) => {
  return React.cloneElement(child, {
    classNames,
  })
}

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
  const prev = useRef<number | null>(null)
  const transitionClass = {
    enter:
      prev.current > index
        ? transitionStyles.prevEnter
        : transitionStyles.nextEnter,
    enterActive: transitionStyles.enterActive,
    exit: transitionStyles.exit,
    exitActive:
      prev.current > index
        ? transitionStyles.prevExitActive
        : transitionStyles.nextExitActive,
  }

  const hobbyWorks = useMemo(() => getCards(hobby), [hobby])
  const jobWorks = useMemo(() => getCards(job), [job])

  const onClick = useCallback((i: number) => {
    setIndex(i)
  }, [])

  useEffect(() => {
    prev.current = index
  }, [index])

  return (
    <div>
      <h2 className={styles.title}>つくったもの</h2>
      <Tabs items={tabItems} onClick={onClick} value={index} />
      <TransitionGroup
        className={styles.tabPanelContainer}
        childFactory={dynamicChildFactory(transitionClass)}
      >
        <CSSTransition key={index} classNames={transitionClass} timeout={300}>
          {index === 0 ? (
            <div className={styles.tabPanel}>{hobbyWorks}</div>
          ) : (
            <div className={styles.tabPanel}>{jobWorks}</div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default Main
