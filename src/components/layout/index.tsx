import React from "react"
import style from "./style.module.scss"

type Props = {
  side: JSX.Element
  main: JSX.Element
}

const Layout: React.FC<Props> = props => {
  return (
    <div className={style.container}>
      <div className={style.side}>{props.side}</div>
      <main className={style.main}>{props.main}</main>
    </div>
  )
}

export default Layout
