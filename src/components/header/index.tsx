import React from "react"
import ArrowIcon from "../../images/ico-arrow.svg"
import style from "./style.module.scss"
import classnames from "classnames"

const Header: React.FC<{ onToggle: () => void; expand: boolean }> = props => (
  <header className={style.header}>
    <h1 className={style.headerLogo}>嘉手苅志朗 Shiro Kadekaru</h1>
    <span
      onClick={props.onToggle}
      className={classnames(style.headerClose, {
        [style.close]: !props.expand,
      })}
    >
      <svg viewBox={ArrowIcon.viewBox}>
        <use xlinkHref={`#${ArrowIcon.id}`} />
      </svg>
    </span>
  </header>
)

export default Header
