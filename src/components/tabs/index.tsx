import React from "react"
import classNames from "classnames"
import styles from "./style.module.scss"

type PropData = {
  onClick: (arg: any) => void
  items: string[]
  value: string | number
}

const Tabs: React.FC<PropData> = ({ onClick, items, value }) => {
  // const tabItems = items.map((item, i) => {
  //   const handleClick = () => {
  //     onClick(i)
  //   }
  //   const tabClass = classNames(styles.tab, { [styles.active]: value === i })
  //   return (
  //     <li key={i} onClick={handleClick} className={tabClass}>
  //       {item}
  //     </li>
  //   )
  // })
  return (
    <div className={styles.tabsWrap}>
      <ul className={styles.tabs}>
        <li
          onClick={() => {
            onClick(0)
          }}
        >
          趣味
        </li>
        <li
          onClick={() => {
            onClick(1)
          }}
        >
          仕事
        </li>
      </ul>
    </div>
  )
}

export default Tabs
