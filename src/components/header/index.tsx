import React from "react"
import { ReactComponent as ArrowIcon } from "../../images/ico-arrow.svg"
import style from "./style.module.scss"
import classnames from "classnames"

const Header: React.FC<{ onToggle: () => void; expand: boolean }> = props => (
  <header className={style.header}>
    <h1 className={style.headerLogo}>
      <span>嘉手苅志朗</span> <span>Shiro Kadekaru</span>
    </h1>
    <span
      onClick={props.onToggle}
      className={classnames(style.headerClose, {
        [style.close]: !props.expand,
      })}
    >
      <ArrowIcon />
    </span>
  </header>
)

export default Header
