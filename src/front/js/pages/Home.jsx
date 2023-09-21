import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";
import { LowerView } from "../component/lowerView/LowerView.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { SiteTitle } from "../component/SiteTitle.jsx";

export const Home = () => {
	const { store, actions } = useContext( Context );


	return (
		<>
			<Navbar />
			<div className="container">
				<SiteTitle />

				<Jumbotron />
				<div className="lowerView mt-5">
					<LowerView />
				</div>



				{/* 
				<div className="jumbotron">
					<Link to={ `/professionalprofile/` }>
						<button className="btn-btn-secondary">Professional Profile</button>
					</Link>

				</div> */}

			</div>
		</>
	);
};
