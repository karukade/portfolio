import React, { useState, useCallback, ReactNode } from "react"
import classnames from "classnames"
import style from "./style.module.scss"
import Header from "../header"

type Props = {
  side: React.ReactNode
  main: React.ReactNode
}

const Layout: React.FC<Props> = props => {
  const [show, setShow] = useState(true)
  const toggle = useCallback(() => {
    setShow(_show => !_show)
  }, [])
  return (
    <div
      className={classnames(style.container, {
        [style.sideClose]: !show,
      })}
    >
      <div className={style.side}>
        <Header onToggle={toggle} expand={show} />
        {props.side}
      </div>
      <main className={style.main}>{props.main}</main>
    </div>
  )
}

export default Layout
