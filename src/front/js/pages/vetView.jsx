import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
// import { Navbar } from "../component/navbar/Navbar.jsx"
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
import { ProfessionalView } from "../component/secondView/ProfessionalView.jsx";
// import { LowerView } from "../component/lower_view/LowerView.jsx";

export const VetView = () => {
	const [viewType, setViewType] = useState('vet')
	const { store, actions } = useContext(Context);

	const handleProfessional = (e, type) => {
		setViewType(type)

	}


	return (
		<>
			<div className="containerSecond">
				<div className="container-fluid text-center">
					<div className="row-professional">
						<div className="col-12">
							<ChangeOfView professionalType={handleProfessional} /> {/*Select Professional*/}
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							Esta es la pagina de vet
						</div>
						<div className="col-9">
							<div className="selectView">
								<ProfessionalView type={viewType} /> {/*Select View*/}
							</div>
						</div>
					</div>
				</div>
				{/* <div className="footer">
					
					<p>Footer</p>
				</div> */}
			</div>
		</>
	);
};
