import { h } from "preact"
import { useState } from "preact/hooks"

const ConditionalRendering = () => {
  const [x] = useState(Math.floor(Math.random() * 15))

  return (
    <>
      {x > 10 ? (
        <p>{x} is greater than 10</p>
      ) : 5 > x ? (
        <p>{x} is less than 5</p>
      ) : (
        <p>{x} is between 5 and 10</p>
      )}
    </>
  )
}

export default ConditionalRendering
