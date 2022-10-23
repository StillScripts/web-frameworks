import { useEffect, useState } from "react"

const DependentVariables = () => {
  const [count, setCount] = useState(1)
  const [doubled, setDoubled] = useState(count * 2)
  const [quadrupled, setQuadrupled] = useState(doubled * 2)

  useEffect(() => {
    setDoubled(count * 2)
    setQuadrupled(doubled * 2)
  }, [count, doubled])

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>Count: {count}</button>
      <p>
        {count} * 2 = {doubled}
      </p>
      <p>
        {doubled} * 2 = {quadrupled}
      </p>
    </>
  )
}

export default DependentVariables
