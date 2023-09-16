import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar/Navbar.jsx"
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
import { ProfessionalView } from "../component/secondView/ProfessionalView.jsx";
// import { LowerView } from "../component/lower_view/LowerView.jsx";


export const AdoptionView = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="containerSecond">
				<div className="navbar">
					<h1>
						Esta es la pagina de adopcion
						<Navbar />
					</h1>
				</div>
				<div className="container-fluid text-center">
					<div className="row-professional">
						<div className="col-12">
							<ChangeOfView /> {/*Select Professional*/}
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							Esta es la pagina de adopcion
						</div>
						<div className="col-9">
							<div className="selectView">
								<ProfessionalView /> {/*Select View*/}
							</div>
						</div>
					</div>
				</div>
				<div className="footer">
					{/*Footer*/}
					<p>Footer</p>
				</div>
			</div>
		</>
	);
};