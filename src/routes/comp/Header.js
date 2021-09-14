import React from 'react';
import "./comp.css";
import logo from "../../assets/logo.png";
import {useHistory } from "react-router-dom";


function Header() {

	const history = useHistory();


	return (

		<div>

			<div className="row space_btw_cen pading_14">
					
				<div className="row left space_btw_cen" onClick={()=>history.push("/")}>
					<img src={logo} alt=""/>
					<h1>The Digiks</h1>
				</div>
				<div className="middle row space_btw_cen">
					<p onClick={()=>history.push("/")}>Home</p>
					<p>|</p>
					<p onClick={()=>history.push("/work")}>What We Do</p>
					<p>|</p>
					<p onClick={()=>history.push("/about")}>About Us</p>
					<p>|</p>
					<p onClick={()=>history.push("/contact")}>Contact Us</p>
				</div>
				<div className="row right space_btw_cen">
					<button>Apply Now</button>
				</div>

			</div>


			

		</div>
	)
}

export default Header