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
				<Jumbotron />
				<LowerView />
				
			</div>
		</>
	);
};
