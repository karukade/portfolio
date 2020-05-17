import React, { useState, useCallback } from "react"
import { CSSTransition } from "react-transition-group"
import classnames from "classnames"
import style from "./style.module.scss"
import Header from "../header"

const { enter, enterActive, exit, exitActive } = style

type Props = {
  side: JSX.Element
  main: JSX.Element
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
