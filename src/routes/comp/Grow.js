import React from 'react'
import "./comp.css";
import {useHistory } from "react-router-dom";

function Grow() {

	const history = useHistory();

	return (
		<div className="grid black_bg">
			
			<div className="grow_content row">
				<h2>Let's Connect</h2>
				<h1>Want To Grow Your Bussiness</h1>
				<p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle</p>
				<button onClick={()=>history.push("/contact")} className="btn1">Contact Us</button>
			</div>

			<img src="https://img.freepik.com/free-vector/marketing-social-media-background-with-funny-elements_1361-1264.jpg?size=626&ext=jpg" alt="" />


		</div>
	)
}

export default Grow