import React, { useRef, useEffect, useState } from "react"
import TabIndicator from "../tabIndicator"

import styles from "./style.module.scss"

type PropsType = {
  currentIndex: number
}

const Tabs: React.FC<PropsType> = ({ children, currentIndex }) => {
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const [indicatorStyles, setIndicatorStyles] = useState({})
  useEffect(() => {
    if (!tabsRef?.current) return
    const currentChild = tabsRef.current.children[currentIndex] as HTMLElement
    const left = currentChild.offsetLeft
    const width = currentChild.offsetWidth
    setIndicatorStyles({ left, width })
  }, [currentIndex])
  return (
    <div className={styles.tabsContainer}>
      <div ref={tabsRef} className={styles.tabs}>
        {children}
      </div>
      <TabIndicator style={indicatorStyles} />
    </div>
  )
}

export default Tabs
