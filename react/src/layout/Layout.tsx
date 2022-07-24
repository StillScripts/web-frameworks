import React from 'react'
 
type ExampleProps = {
		title?: string;
}
 
const Example:React.FC<ExampleProps> = ({ title }) => {
	return (
		<div>
			{title}
		</div>
	)
}
 
export default Example