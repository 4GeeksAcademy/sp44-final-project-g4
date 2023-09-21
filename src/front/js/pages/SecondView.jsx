import React, { useEffect } from "react";
// import { useContext } from "react";
// import { Context } from "../store/appContext";
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
import { ProfessionalView } from "../component/secondView/ProfessionalView.jsx";
import { Navbar } from "../component/Navbar.jsx";
import { useLocation } from "react-router-dom";



export const SecondView = () => {
	// const { store, actions } = useContext(Context);
	let { state } = useLocation();
	localStorage.setItem( "professionalType", state );


	useEffect( () => {
		localStorage.setItem( "professionalType", state );

	}, [ state ] );

	useEffect( () => {
		localStorage.setItem( "professionalType", state );

	}, [] );

	return (
		<>
			<Navbar />
			<div className="containerSecond">
				<div className="container-fluid text-center">

					<div className="row">

						<div className="col-12">
							<div className="selectView">
								<ProfessionalView typeSearch={ state } /> {/*Select View*/ }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

