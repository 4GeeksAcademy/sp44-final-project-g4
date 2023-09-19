import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx"
import { LowerView } from "../component/lowerView/LowerView.jsx";
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";
import Mapcomponent from "../component/map/MapComponent.jsx";
import { getAllVets } from "../helpers/getAllVets.js";

export const Home = () => {
	const { store, actions } = useContext( Context );


	return (
		<>
			<div className="container">

				<Jumbotron />
				<div className="jumbotron">
					<Link to={ `/professionalprofile/` }>
						<button className="btn-btn-secondary">Professional Profile</button>
					</Link>

				</div>
				<div className="lowerView mt-5">
					<LowerView />
				</div> */}
				<Mapcomponent type="groomers" />
			</div>
		</>
	);
};
