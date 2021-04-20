import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid #f6f6f6', height: '800px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;