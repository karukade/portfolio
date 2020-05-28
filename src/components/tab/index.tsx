import React, { useCallback } from "react"
import classnames from "classnames"
import styles from "./style.module.scss"

type IndexType = number

type PropsType = {
  index: IndexType
  currentIndex: IndexType
  onClick: (value: IndexType) => void
}

const Tab: React.FC<PropsType> = ({
  index,
  currentIndex,
  onClick,
  children,
}) => {
  const handleClick = useCallback(() => {
    onClick(index)
  }, [index, onClick])
  const tabStyle = classnames(styles.tab, {
    [styles.active]: index === currentIndex,
  })
  return (
    <button className={tabStyle} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Tab
