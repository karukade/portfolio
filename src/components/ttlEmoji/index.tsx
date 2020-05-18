import React from "react"
import styles from "./style.module.scss"

const TitleEmoji: React.FC<{ emoji: string }> = ({ emoji, children }) => {
  return (
    <h3 className={styles.ttl}>
      <span className={styles.emoji}>{emoji}</span>
      {children}
    </h3>
  )
}

export default TitleEmoji
