import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
// import { Navbar } from "../component/navbar/Navbar.jsx"
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
import { ProfessionalView } from "../component/secondView/ProfessionalView.jsx";
// import { LowerView } from "../component/lower_view/LowerView.jsx";


export const SecondView = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="containerSecond">
				<div className="navbar">
					<h1>
						Spain 44 final project
						{/* <Navbar /> */}
					</h1>
				</div>
				<div class="container-fluid text-center">
					<div class="row-professional">
						<div class="col-12">
							<ChangeOfView /> {/*Select Professional*/}
						</div>
					</div>
					<div class="row">
						<div class="col-3">
							Column
						</div>
						<div class="col-9">
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

