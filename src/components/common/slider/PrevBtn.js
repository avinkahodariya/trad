import React from 'react';
import './style.css';
const PrevBtn = (props)=>{

	const { className, style, onClick } = props;
	return (
		<>
        <button type="button"  className={`${className} `} 
            onClick={onClick}
            style={{
            	...style,
            	    "background": "#fff",
				    "width": "45px",
				    "height": "45px",
				    "borderRadius": "50px",
				    "padding": "0px 5px",
            }}
            >
            <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.3379 7.14011L14.9279 18.5501C13.5804 19.8976 13.5804 22.1026 14.9279 23.4501L26.3379 34.8601" stroke="#3491FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
		</button>
		</>)
}
export default PrevBtn;