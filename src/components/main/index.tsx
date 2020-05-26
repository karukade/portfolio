import React, { useState, useCallback, useRef, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import WorksList from "../worksList"
import TabsContainer from "../tabsContainer"
import Tab from "../tab"

import styles from "./style.module.scss"
import {
  exit,
  enterActive,
  prevEnter,
  prevExitActive,
  nextEnter,
  nextExitActive,
} from "./transition.module.scss"

import { PostFragment } from "../../../types/graphql-types"

type PropsType = {
  works: {
    [K in "hobby" | "job"]: PostFragment[]
  }
}

type CSSTransitionClassNames = {
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

const dynamicChildFactory = <T extends CSSTransitionClassNames>(
  classNames: T
) => (child: React.ReactElement<{ classNames: T }>) => {
  return React.cloneElement(child, {
    classNames,
  })
}

const Main: React.FC<PropsType> = ({ works }) => {
  if (!works) return null
  const { hobby, job } = works
  const [index, setIndex] = useState(0)
  const prev = useRef<number | null>(null)
  const toPrev = prev.current === null ? false : prev.current > index
  const transitionClass = {
    enter: toPrev ? prevEnter : nextEnter,
    enterActive: enterActive,
    exit: exit,
    exitActive: toPrev ? prevExitActive : nextExitActive,
  }

  const onClick = useCallback((index: number) => {
    setIndex(index)
  }, [])

  useEffect(() => {
    prev.current = index
  }, [index])

  return (
    <div>
      <h2 className={styles.title}>つくったもの</h2>
      <TabsContainer>
        <Tab value={0} currentValue={index} onClick={onClick}>
          💸趣味
        </Tab>
        <Tab value={1} currentValue={index} onClick={onClick}>
          💰仕事（抜粋）
        </Tab>
      </TabsContainer>
      <TransitionGroup
        className={styles.tabPanelContainer}
        childFactory={dynamicChildFactory(transitionClass)}
      >
        <CSSTransition key={index} classNames={transitionClass} timeout={300}>
          {index === 0 ? (
            <div className={styles.tabPanel}>
              <WorksList works={hobby} />
            </div>
          ) : (
            <div className={styles.tabPanel}>
              <WorksList works={job} />
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default Main
