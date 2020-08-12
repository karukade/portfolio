import React from "react"
import classnames from "classnames"
import styles from "./style.module.scss"
import { ReactComponent as GithubIcon } from "../../images/github.svg"
import { Maybe } from "../../../types/graphql-types"

const icons: {
  [key: string]: React.FC
} = {
  github: GithubIcon,
}

type LinkElmAttrs = {
  href?: string
  target?: string
}

type PropsType = LinkElmAttrs & {
  type?: "lined"
  size?: "full"
  link?: boolean
  icon?: Maybe<string>
  children?: React.ReactNode
}

const Btn: React.FC<PropsType> = ({
  type = "lined",
  link = true,
  size,
  icon,
  children,
  ...others
}) => {
  const btnStyles = classnames(
    styles.btn,
    type && styles[type],
    size && styles[size]
  )
  const Comp = link ? "a" : "button"
  const Icon = icon && icons[icon] ? icons[icon] : null
  return (
    <Comp className={btnStyles} {...others}>
      <span className={styles.inner}>
        {Icon ? (
          <span className={styles.icon}>
            <Icon />
          </span>
        ) : null}
        <span>{children}</span>
      </span>
    </Comp>
  )
}

export default React.memo(Btn)
