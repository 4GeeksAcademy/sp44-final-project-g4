import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const UnsignedProfessionalCard = ( { unsignedProfessionals } ) => {
    const [ userId, setUserId ] = useState( localStorage.getItem( "id" ) );
    return (
        <>
            <ul className="d-flex flex-wrap justify-content-center">
                { unsignedProfessionals !== null && unsignedProfessionals.map( ( professional ) => (
                    <li key={ professional.id } className="mb-4 ms-2 me-2" >

                        <div className="card overflow-hidden" style={ { maxWidth: "15rem", minHeight: "5rem" } }>

                            <div className="card-body p-0 text-center main-light-blue-bg">


                                <h6 className="mb-3 m-2 pt-3">
                                    <a href="#!.html" className="text-reset">{ professional.title } </a>
                                </h6>


                                <div className="row mx-0 border-top border-bottom">
                                    <div className="col-12 text-center border-end py-3">
                                        {/* <h5 className="mb-0">2345</h5> */ }
                                        <small className="text-muted" style={ { fontSize: "12px" } } >{ professional.address }</small>
                                    </div>

                                </div>
                                <ul className="list-group list-group-flush d-flex text-center ">

                                    { localStorage.getItem( "email" ) &&
                                        <>

                                            <li className="list-group-item px-3 d-flex justify-content-center  project-blue ">
                                                <div className="me-2">
                                                    <h6 className="text-whitemt-2">Phone:</h6>
                                                </div>
                                                <div>
                                                    <h6 className="">{ professional.phoneNumber }</h6>
                                                </div>
                                            </li>
                                            <li className="list-group-item  d-flex justify-content-center ">
                                                <div>
                                                    <a href={ professional.website ? professional.website : '#' } className="btn mt-2" target="blank">Website</a>
                                                </div>
                                            </li>
                                        </>

                                    }
                                    { !localStorage.getItem( "email" ) && <Link to="/login" class="btn btn-outline-primary project-blue text-white">SignIn To See Contact</Link>
                                    }

                                </ul>
                            </div>
                        </div>
                    </li>

                ) ) }
                <hr className="mt-2 main-btn" />
            </ul>



        </>
    );
};
