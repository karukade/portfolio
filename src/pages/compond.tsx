import React, { useState } from "react"
import Test from "../components/test"

const Component: React.FC = () => {
  const [name, setName] = useState("Name")
  return (
    <>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <Test name={name} />
    </>
  )
}

export default Component
