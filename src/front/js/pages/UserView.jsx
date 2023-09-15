import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar.jsx"

export const UserView = () => {
	const { store, actions } = useContext(Context);

	// Define una variable de estado para cada campo de entrada
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [userPostcode, setUserPostcode] = useState("");
	const [userState, setUserState] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userCountry, setUserCountry] = useState("");
	const [userRegion, setUserRegion] = useState("");
	const [userDetails, setUserDetails] = useState("");
	// ... Define el resto de las variables de estado para otros campos

	const handleChange = (event) => {
		// Actualiza el valor de la variable de estado correspondiente cuando cambia el campo de entrada
		switch (event.target.name) {
			case "name":
				setName(event.target.value);
				break;
			case "surname":
				setSurname(event.target.value);
				break;
			case "mobileNumber":
				setMobileNumber(event.target.value);
				break;
			case "userAddress":
				setUserAddress(event.target.value);
				break;
			case "userPostcode":
				setUserPostcode(event.target.value);
				break;
			case "userState":
				setUserState(event.target.value);
				break;
			case "userEmail":
				setUserEmail(event.target.value);
				break;
			case "userCountry":
				setUserCountry(event.target.value);
				break;
			case "userRegion":
				setUserRegion(event.target.value);
				break;
			case "userDetails":
				setUserDetails(event.target.value);
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
							<h4 className="text-right">Profile Settings</h4>
						</div>
						<div className="row mt-2">
							<div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={name} onChange={handleChange} /></div>
							<div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value={surname} placeholder="surname" onChange={handleChange} /></div>
						</div>
						<div className="row mt-3">
							<div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={mobileNumber} onChange={handleChange} /></div>
							<div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value={userAddress} onChange={handleChange} /></div>
							<div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value={userPostcode} onChange={handleChange} /></div>
							<div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value={userState} onChange={handleChange} /></div>
							<div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value={userEmail} onChange={handleChange} /></div>
						</div>
						<div className="row mt-3">
							<div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value={userCountry} onChange={handleChange} /></div>
							<div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value={userRegion} placeholder="state" onChange={handleChange} /></div>
						</div>
						<div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="p-5 py-5">
						<div className="d-flex justify-content-between align-items-center experience">
							<span>Edit Experience</span>
							<br />
							<br />
							<span className="border px-3 p-1 add-experience">Experience</span>
						</div>
						<div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value={userDetails} onChange={handleChange} /></div>
					</div>
				</div>
			</div>
		</div>

	);
};