import React from "react"
import Icon, { icons } from "../components/icon"

const Component: React.FC = () => {
  const Icons = (Object.keys(icons) as (keyof typeof icons)[]).map(key => (
    <Icon key={key} name={key} />
  ))
  return (
    <div
      style={{
        width: "24px",
        margin: "0 auto",
      }}
    >
      {Icons}
    </div>
  )
}

export default Component
