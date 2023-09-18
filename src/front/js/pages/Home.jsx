import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { LowerView } from "../component/lowerView/LowerView.jsx";
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";
import Mapcomponent from "../component/map/MapComponent.jsx";
import { getAllVets } from "../helpers/getAllVets.js";

export const Home = () => {
	const { store, actions } = useContext( Context );


	return (
		<>
			<div className="container">
				<h1>3 4 vaso</h1>
				{/* <div className="mt-3">
					<Jumbotron />
				</div>
				<div className="lowerView mt-5">
					<LowerView />
				</div> */}
				<Mapcomponent type="groomers" />
			</div>
		</>
	);
};
