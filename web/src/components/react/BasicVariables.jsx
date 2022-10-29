import { useState } from "react"

const BasicVariables = () => {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  )
}

export default BasicVariables
