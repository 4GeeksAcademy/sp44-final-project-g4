import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteBadge } from './FavoriteBadge.jsx';
export const RegisteredProfessionalCard = ( { professionals } ) => {
    const [ userId, setUserId ] = useState( localStorage.getItem( "id" ) );



    return (
        <>
            <ul className="d-flex flex-wrap flex-column">
                { professionals !== null && professionals.map( ( professional ) => (
                    <li key={ professional.id } className="mb-4">

                        <div className="card overflow-hidden  w-100 ">

                            <div className="card-body p-0 text-center project-light">

                                <a href="#!.html" className="avatar xl rounded-circle  p-1 position-relative mt-n5 d-block mx-auto">
                                    <img src={ professional.avatar || "https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" } className=" avatar-img img-fluid rounded-circle" alt="" style={ { width: "10rem" } } />
                                </a>
                                <h5 className="mb-3 pt-3">
                                    <a href="#!.html" className="text-reset">{ professional.name } { professional.last_name } </a>
                                </h5>

                                { localStorage.getItem( "userToken" ) &&
                                    <FavoriteBadge
                                        userId={ userId }
                                        professionalId={ professional.id }
                                        type={ localStorage.getItem( "professionalType" ) }
                                    /> }

                                <h6 className="main-title mt-2">10% off with this professional!</h6>
                                {/* <span className="text-muted small d-block mb-4">Full stack developer</span> */ }
                                <div className="row mx-0 border-top border-bottom">
                                    <div className="col-12 text-center border-end py-3">
                                        {/* <h5 className="mb-0">2345</h5> */ }
                                        <small className="text-muted">{ professional.description }</small>
                                    </div>

                                </div>
                                <ul className="list-group list-group-flush d-flex text-center ">

                                    <li className="list-group-item px-3 d-flex justify-content-center project-blue ">
                                        <div className="me-2">
                                            <h6 className="text-white">Location:</h6>
                                        </div>
                                        <div>
                                            <h6 className="">{ professional.address }, { professional.zip_code }</h6>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-3 d-flex justify-content-center">
                                        <div className="me-2">
                                            <h6 className="text-muted">Company Name:</h6>
                                        </div>
                                        <div>
                                            <h6 className="">{ professional.company_name }</h6>
                                        </div>
                                    </li>
                                    { localStorage.getItem( "userToken" ) && <ul>

                                        <li className="list-group-item px-3 d-flex justify-content-center project-blue">
                                            <div className="me-2">
                                                <h6 className="text-white">Contact:</h6>
                                            </div>
                                            <div>
                                                <h6 className="">{ professional.phone_number }</h6>
                                            </div>

                                        </li>
                                        <li className="list-group-item px-3 d-flex justify-content-center ">
                                            <div className="me-2">
                                                <h6 className="text-muted">Email:</h6>
                                            </div>
                                            <div>
                                                <h6 className="">{ professional.email }</h6>
                                            </div>

                                        </li>
                                    </ul> }

                                    { !localStorage.getItem( "userToken" ) && <Link to="/login" class="btn btn-outline-primary project-blue text-white">SignIn To See Contact</Link>
                                    }

                                </ul>
                            </div>
                        </div>

                    </li>
                ) ) }
            </ul >
        </>
    );
};
