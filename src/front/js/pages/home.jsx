import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
// import { Navbar } from "../component/navbar/Navbar.jsx"
import { LowerView } from "../component/lower_view/LowerView.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>    
		{/* modificar el home */}
			<div className="container">
				<div className="navbar">
				<h1>
					Spain 44 final project
					{/* <Navbar /> */}
				</h1>
				</div>
				<div className="jumbotron">
					{/*Jumbotron */}
					<img src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg" alt="imagen jumbotron" />
				</div>
				<div className="lowerView">
					<LowerView />
				</div>
				<div className="footer">
					{/*Footer*/}
					<p>Footer</p>
				</div>
			</div>
		</>
	);
};
