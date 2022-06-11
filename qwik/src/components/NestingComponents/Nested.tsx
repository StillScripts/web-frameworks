import { component$ } from "@builder.io/qwik";

const Nested = component$(()=>{
	return (
		<p>{`don't affect this element`}</p>
	)
})

export default Nested;