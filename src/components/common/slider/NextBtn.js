import React from 'react';
import './style.css';
const NextBtn = (props)=>{

	const { className, style, onClick } = props;
	return (
		<>
		    <button type="button"  className={`${className} `}  onClick={onClick} 

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
	            <path d="M15.6621 7.14011L27.0721 18.5501C28.4196 19.8976 28.4196 22.1026 27.0721 23.4501L15.6621 34.8601" stroke="#3491FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	          </svg>            
            </button>
		</>)
}
export default NextBtn;