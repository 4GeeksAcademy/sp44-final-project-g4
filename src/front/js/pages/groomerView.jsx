import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
import { ProfessionalView } from "../component/secondView/ProfessionalView.jsx";


export const GroomerView = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="containerSecond">
				<div className="navbar">
					<h1>
						Esta es la pagina de groomer
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
							Esta es la pagina de groomer
						</div>
						<div className="col-9">
							<div className="selectView">
								<ProfessionalView /> {/*Select View*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
