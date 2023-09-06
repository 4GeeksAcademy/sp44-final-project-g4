import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar/Navbar.jsx"
import { LowerView } from "../component/lower view/LowerView.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>
				Spain 44 final project
			</h1>
			{/*Navbar */}
			<Navbar />
			{/*END of Navbar */}

			{/*Jumbotron */}

			{/*Select Professional*/}
			<LowerView />
			{/*Footer*/}
		</>
	);
};
