import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/Navbar.jsx";
import { Link } from "react-router-dom";
Link;


export const UserView = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")));
	}, []);


	return (
		<>
			<Navbar />
			<div className="container mt-5 mb-5" id="container-user-profile" style={{ justifyContent: "center", height: "80vh" }}>

				<div className="page-content  project-blue p-5" id="page-content-user-profile" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

					<div className="col-xl-12 col-md-12">
						<div className="card user-card-full" id="user-card-yulia">
							<div className="row">
								<div className="col-sm-3 bg-c-lite-green user-profile">
									<div className="card-block text-center">
										<div className="m-b-25">
											<img src={user.avatar} className="img-radius" alt="User-Profile-Image" style={{ width: "5rem" }} />
										</div>

										<h6>{user.name}</h6>
										<h6>{user.last_name}</h6>

									</div>
								</div>

								<div className="col-sm-8">
									<div className="card-block">
										<h6 className="m-b-20 p-b-5 b-b-default f-w-600">Contact</h6>
										<div className="row">
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Email</p>
												<h6 className="text-muted f-w-400">{user.email}</h6>
											</div>

										</div>
										<h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Information</h6>
										<div className="row">
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Name</p>
												<h6 className="text-muted f-w-400">{user.name}</h6>
											</div>
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Last Name</p>
												<h6 className="text-muted f-w-400">{user.last_name}</h6>
											</div>
											<div className="col-sm-6">
												<p className="m-b-10 f-w-600">Member Since</p>
												<h6 className="text-muted f-w-400">{user.created_at}</h6>
											</div>


											<div className="btn-change-personal-info" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id="change-personal-info-user">
												<Link to="/edit-profile" state={user} className="btn project-blue text-white" > Edit Profile
												</Link>
											</div>

										</div>

									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</>
	);
};