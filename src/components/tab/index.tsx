import React, { useCallback } from "react"
import classnames from "classnames"
import styles from "./style.module.scss"

type ValueType = number | string

type PropsType = {
  value: ValueType
  currentValue: ValueType
  onClick: (value: ValueType) => void
}

const Tab: React.FC<PropsType> = ({
  value,
  currentValue,
  onClick,
  children,
}) => {
  const handleClick = useCallback(() => {
    onClick(value)
  }, [value, onClick])
  const tabStyle = classnames(styles.tab, {
    [styles.active]: value === currentValue,
  })
  return (
    <button className={tabStyle} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Tab
