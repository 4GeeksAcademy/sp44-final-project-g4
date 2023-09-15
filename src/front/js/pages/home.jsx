import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar.jsx"
import { Jumbotron } from "../component/jumbotron/Jumbotron.jsx";
import { LowerView } from "../component/lower_view/LowerView.jsx";
import { UserView } from "./UserView.jsx";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>


			<Jumbotron />
			

			<LowerView />
			
			

			{/*END of Navbar */}

			{/*Jumbotron */}

			{/*Select Professional*/}

		</>
	);
};
