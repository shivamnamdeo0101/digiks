import React from 'react';
import "./comp.css";

function Banner() {
	return (
		<div>
			<div className="banner">
				<h2>Be Digital, By Digiks</h2>
				<p>Your growth, our resonsisibility</p>

				<div className="row banner_button_row">
					<button className="btn1">What we do </button>
					<button className="btn2">Send Ping !</button>
				</div>


					<div className="grid orange_bg">
						<img src="https://img.freepik.com/free-vector/marketing-social-media-background-with-funny-elements_1361-1264.jpg?size=626&ext=jpg" alt=""/>

						<div className="banner_grid_comp_content ">
							<h1>Getting You To Connected To Your Audience</h1>
							<p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had 
							ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a 
							hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark 
							sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light 
							streaming through a rift in the clouds.</p>
						</div>

					</div>
					

			</div>
		</div>
	)
}

export default Banner