import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { LowerView } from "../component/lowerView/LowerView.jsx";
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";

export const Home = () => {
	const { store, actions } = useContext( Context );

	return (
		<>
			<div className="container">
				<div className="mt-3">
					<Jumbotron />
				</div>
				<div className="lowerView mt-5">
					<LowerView />
				</div>
			</div>
		</>
	);
};
