import * as React from "react"
import { useCallback, useMemo, useState } from "react"

let tmpHandleClick: () => void
let tmpHandleClick2: () => void

const Component: React.FC<{ name: string }> = props => {
  console.log("-------------------------------\n")
  const [count, setCount] = useState(0)

  const double = useMemo(() => {
    console.log("double が計算された。")
    return count * 2
  }, [count])

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  if (tmpHandleClick !== handleClick) {
    console.log("handleClick が生成された。")
  }
  tmpHandleClick = handleClick

  // ----------------------

  const [count2, setCount2] = useState(0)
  const dobule2Func = (i: number) => {
    console.log("double2 が計算された。")
    return i * 2
  }
  const double2 = dobule2Func(count2)

  const handleClick2 = () => {
    setCount2(count2 + 1)
  }
  if (tmpHandleClick2 !== handleClick2) {
    console.log("handleClick2 が生成された。")
  }
  tmpHandleClick2 = handleClick2

  return (
    <div>
      <h2>{props.name}</h2>
      <p>state: {count}</p>
      <p>double: {double}</p>
      <button onClick={handleClick}>handleClick</button>
      <br />
      <p>state2: {count2}</p>
      <p>double2: {double2}</p>
      <button onClick={handleClick2}>handleClick2</button>
    </div>
  )
}

export default Component
