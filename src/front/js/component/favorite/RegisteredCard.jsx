import React from 'react';

export const RegisteredCard = ( { professional } ) => {
    return (
        <>
            <li key={ professional.id } className="mb-4 ms-2 me-2" >

                <div className="card overflow-hidden w-100 main-mild-blue-bg" style={ { maxWidth: "20rem" } }>

                    <div className="card-body p-0 text-center project-light">

                        <img src={ professional.avatar || defaultImage } className=" mt-2 .main-contrastavatar-img img-fluid rounded-circle" alt="" style={ { width: "7rem", height: "7rem" } } />

                        <h5 className="mb-3 pt-3">
                            <a href="#!.html" className="text-reset">{ professional.name } { professional.last_name } </a>
                        </h5>


                        <h6 className="main-title mt-2">10% off with this professional!</h6>
                        {/* <span className="text-muted small d-block mb-4">Full stack developer</span> */ }
                        <div className="row mx-0 border-top border-bottom ">
                            <div className="col-12 text-center border-end py-3">
                                {/* <h5 className="mb-0">2345</h5> */ }
                                <small>{ professional.description }</small>
                            </div>

                        </div>
                        <ul className="list-group  d-flex text-center ">

                            <li className="list-group-item px-3 d-flex justify-content-center main-contrast text-white">
                                <div className="me-2 ">
                                    <h6 >Location:</h6>
                                </div>
                                <div>
                                    <h6 className="">{ professional.address }, { professional.zip_code }</h6>
                                </div>
                            </li>
                            <li className="list-group-item px-3 d-flex justify-content-center">
                                <div className="me-2">
                                    <h6 >Company</h6>
                                </div>
                                <div>
                                    <h6 className="project-text-contrast">{ professional.company_name }</h6>
                                </div>
                            </li>
                            { localStorage.getItem( "userToken" ) &&
                                <>
                                    <li className="list-group-item px-3 text-center flex-column p-1">
                                        <div className="me-2">
                                            <h6>Email:</h6>

                                            <small className="project-text-contrast">{ professional.email }</small>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-3 d-flex justify-content-center main-contrast">
                                        <div className="me-2">
                                            <h6 className="text-white">Contact:</h6>
                                        </div>
                                        <div>
                                            <h6 className="">{ professional.phone_number }</h6>
                                        </div>

                                    </li>
                                </>
                            }

                            { !localStorage.getItem( "userToken" ) && <Link to="/login" class="btn  btn-outline-primary project-blue text-white">SignIn To See Contact</Link>
                            }
                        </ul>
                    </div>
                </div>

            </li>
        </>
    );
};
