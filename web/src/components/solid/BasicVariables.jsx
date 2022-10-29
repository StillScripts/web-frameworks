import { createSignal } from "solid-js"

const BasicVariables = () => {
  const [count, setCount] = createSignal(0)

  function handleClick() {
    setCount(count() + 1)
  }
  return (
    <button onClick={handleClick}>
      Count: {count()}
    </button>
  )
}

export default BasicVariables
