import React from "react";
// import { useContext } from "react";
// import { Context } from "../store/appContext";
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
import { ProfessionalView } from "../component/secondView/ProfessionalView.jsx";
import { Navbar } from "../component/Navbar.jsx";



export const SecondView = () => {
	// const { store, actions } = useContext(Context);

	return (
		<>
			<Navbar />
			<div className="containerSecond">
				<div className="container-fluid text-center">

					<div className="row">

						<div className="col-12">
							<div className="selectView">
								<ProfessionalView /> {/*Select View*/ }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

