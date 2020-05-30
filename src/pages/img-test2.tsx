import React from "react"
import Icon from "../components/skillIcons"
import styles from "../components/skillIcons/style.module.scss"

const Component: React.FC = () => {
  type Keys = keyof typeof styles
  const keys = Object.keys(styles) as Keys[]
  const icons = keys.map(name => <Icon name={name} key={name} />)
  return <>{icons}</>
}

export default Component
