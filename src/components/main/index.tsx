import React, { useState, useCallback, useRef, useEffect } from "react"
import { graphql } from "gatsby"
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
) => {
  return (child: React.ReactElement<{ classNames: T }>) =>
    React.cloneElement(child, {
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
      <TabsContainer currentIndex={index}>
        <Tab index={0} currentIndex={index} onClick={onClick}>
          <span>💸</span>
          <span>趣味</span>
        </Tab>
        <Tab index={1} currentIndex={index} onClick={onClick}>
          <span>💰</span>
          <span>仕事から抜粋</span>
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

export const query = graphql`
  fragment Post on ContentfulPost {
    id
    title
    description {
      childContentfulRichText {
        html
      }
    }
    features
    skills {
      ...Skill
    }
    video
    img {
      fluid(maxWidth: 1180) {
        ...GatsbyContentfulFluid
      }
    }
    links
    fields {
      parsedLinks {
        link
        value
      }
    }
  }
`
