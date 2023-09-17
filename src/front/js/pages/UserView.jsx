import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar.jsx"


export const UserView = () => {
	const { store, actions } = useContext(Context);


	const handleClose = () => {

	};

	// Define una variable de estado para cada campo de entrada
	const [name, setName] = useState("");
	const [userLastname, setUserLastName] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [userEmail, setUserEmail] = useState("");

	// ... Define el resto de las variables de estado para otros campos

	const handleChange = (event) => {
		// Actualiza el valor de la variable de estado correspondiente cuando cambia el campo de entrada
		switch (event.target.name) {
			case "name":
				setName(event.target.value);
				break;
			case "userLastname":
				setUserLastName(event.target.value);
				break;
			case "mobileNumber":
				setMobileNumber(event.target.value);
				break;
			case "userEmail":
				setUserEmail(event.target.value);
				break;

			// ... Actualiza las demás variables de estado
			default:
				break;
		}
	};

	return (
		<div className="container rounded bg-white mt-5 mb-5">
			<div className="row">
				<div className="col-md-3 border-right">
					<div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://media.istockphoto.com/id/1201041782/es/foto/alpaca.jpg?s=612x612&w=0&k=20&c=6jmsHGAzm7_AvnwsgLDhSrMK_4eTD2FMUdPcsRtkygc=" /><span className="font-weight-bold">Pepito</span><span className="text-black-50">pepito@gmail.com</span><span> </span></div>
				</div>
				<div className="col-md-5 border-right">
					<div className="p-3 py-5">
						<div className="d-flex justify-content-between align-items-center mb-3">
							<h4 className="text-right">Personal Info</h4>
						</div>
						<div className="row mt-2">
							<div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={name} onChange={handleChange} /></div>
							<div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" value={userLastname} placeholder="last name" onChange={handleChange} /></div>
						</div>
						<div className="row mt-3">
							<div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="enter your email" value={userEmail} onChange={handleChange} /></div>
							<div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter mobile number" value={mobileNumber} onChange={handleChange} /></div>
						</div>

						<div className="row mt-3">

						</div>

						<div className="mt-5 text-center">
							<a className="btn custom-btn-jumbotron-home glow-on-hover btn-4 btn-lg my-5" id='btn-jumbotron-home'
								href="#"
								role="button"
								onClick="#">
								<h5>Save Changes</h5></a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="p-5 py-5">
						<div className="d-flex justify-content-between align-items-center experience">

						</div>
						<div className="col-md-12"></div>
					</div>
				</div>
			</div>
		</div>

	);
};