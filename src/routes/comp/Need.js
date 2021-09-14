import React from 'react';
import "./comp.css";

import {useHistory} from "react-router-dom";

function Need() {

	const history = useHistory();

	return (
		<div className="need">
				
			<div className="need_grid">

				<div className="need_comp" onClick={()=>history.push("/service/1")}>

					<h3>Icon</h3>
					<h2>Youtube and Instagram Content Creation</h2>
					<p>Creating theme posts and story to get high brand value and unique attachment to audience</p>
				</div>
				<div className="need_comp" onClick={()=>history.push("/service/2")}>

					<h3>Icon</h3>
					<h2>Website And App Development</h2>
					<p>A complete branded website\app with 6 month maintenance service. Website\app will be made in specific coding languages to have good security and better understanding. </p>
				</div>
				<div className="need_comp" onClick={()=>history.push("/service/3")}>

					<h3>Icon</h3>
					<h2>Social Media Management</h2>
					<p>We cover from Posting to uploading stories, frequently replying dms. Covering latest topic to get more reach organically.</p>
				</div>
				


			</div>

		</div>
	)
}

export default Need