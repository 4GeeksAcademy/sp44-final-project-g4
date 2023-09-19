import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";



export const UserView = () => {
	const [ user, setUser ] = useState( '' );

	useEffect( () => {
		setUser( JSON.parse( localStorage.getItem( "user" ) ) );
	}, [] );


	return (
		<div className="container bg-white mt-5 mb-5" id="container-user-profile" style={ { justifyContent: "center", height: "100vh" } }>

			<div className="page-content  project-blue p-5" id="page-content-user-profile" style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>

				<div className="col-xl-6 col-md-12">
					<div className="card user-card-full" id="user-card-yulia">
						<div className="row m-l-0 m-r-0">
							<div className="col-sm-4 bg-c-lite-green user-profile">
								<div className="card-block text-center text-white">
									<div className="m-b-25">
										<img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
									</div>

									<h6>{ user.name }</h6>

									<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>

								</div>



							</div>
							<div className="col-sm-8">
								<div className="card-block">
									<h6 className="m-b-20 p-b-5 b-b-default f-w-600">Contact</h6>
									<div className="row">
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Email</p>
											<h6 className="text-muted f-w-400">{ user.email }</h6>
										</div>

									</div>
									<h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Information</h6>
									<div className="row">
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Name</p>
											<h6 className="text-muted f-w-400">{ user.name }</h6>
										</div>
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Last Name</p>
											<h6 className="text-muted f-w-400">{ user.last_name }</h6>
										</div>
										<div className="col-sm-6">
											<p className="m-b-10 f-w-600">Member Since</p>
											<h6 className="text-muted f-w-400">{ user.created_at }</h6>
										</div>


										<div className="btn-change-personal-info" style={ { display: "flex", justifyContent: "center", alignItems: "center" } } id="change-personal-info-user">
											<a className="btn custom-btn-jumbotron-home glow-on-hover btn-4 btn-lg my-5" id='btn-jumbotron-home'
												href="#"
												role="button"
												onClick="#">
												<h5>Change personal info</h5></a>
										</div>

									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>


	);
};