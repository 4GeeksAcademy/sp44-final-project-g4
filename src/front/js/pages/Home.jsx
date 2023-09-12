import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { LowerView } from "../component/lowerView/LowerView.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>    
		
			<div className="container">
				<div className="jumbotron">
					
				</div>
				<div className="lowerView">
					<LowerView />
				</div>
				
			</div>
		</>
	);
};
