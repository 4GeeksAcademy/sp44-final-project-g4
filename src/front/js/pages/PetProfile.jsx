import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const PetProfile = () => {
    let { state } = useLocation();
    const { contact, name, breeds, size, age, colors, attributes, tags, url, photos, environment } = state;

    return (
        <>
            <div className="d-flex flex-wrap flex-lg-nowrap pet-background">
                {/* Left */ }
                <div className="m-5 p-5 flex-grow-1 ">
                    <img src="https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" className="img-fluid rounded-top" alt="Pet profile picture" style={ { width: "15rem" } } />
                    <div className="project-yellow p-3 rounded">
                        <div>
                            <h3>Contact the rescuers</h3>
                            <p>Email: <span>{ contact.email && contact.email.toLowerCase() }</span></p>
                            <p>Phone: <span>{ contact.phone && contact.phone }</span></p>
                            <p>Address: <span>{ contact.address.address && contact.address.address }, { contact.address.city }, { contact.address.state && contact.address.state } { contact.address.postcode && contact.address.postcode }</span></p>
                        </div>
                        <div className="w-50">
                            <p>Contact directly to the Petfinder Asociation for enquiries about this animal and information about the adoption proccess.</p>

                        </div>
                    </div>
                    <div>
                        <img src={ typeof photos[ 0 ] === 'undefined' ? "" : photos[ 0 ].medium } className="img-thumbnail m-1" alt="..." style={ { width: "15rem" } } />
                        <img src={ typeof photos[ 1 ] === 'undefined' ? "" : photos[ 1 ].medium } className="img-thumbnail m-1" alt="..." style={ { width: "15rem" } } />
                        <img src={ typeof photos[ 2 ] === 'undefined' ? "" : photos[ 2 ].medium } className="img-thumbnail m-1" alt="..." style={ { width: "15rem" } } />
                    </div>

                </div>

                {/* Right */ }
                <div className="m-5 p-5 project-blue text-white">
                    <div>
                        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                    <div>
                                        <i class="fa-solid fa-dog fa-xl icon-blue" ></i>
                                    </div>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Name</h6>
                                            <p className="mb-0 opacity-75">{ name }</p>
                                        </div>
                                        <small className="opacity-50 text-nowrap">now</small>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                    <div>
                                        <i class="fa-solid fa-weight-hanging fa-xl" style={ { color: "#d0b605" } }></i>
                                    </div>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Size</h6>
                                            <p className="mb-0 opacity-75">{ size }</p>
                                        </div>

                                    </div>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                    <div>
                                        <i class="icon-blue fa-solid fa-droplet fa-xl"></i>
                                    </div>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Color</h6>
                                            <p className="mb-0 opacity-75">{ }</p>
                                        </div>
                                        <small className="opacity-50 text-nowrap">{ colors.primary }, { colors.secondary }</small>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                    <div>
                                        <i className="fa-solid fa-syringe fa-xl" style={ { color: "#d0b605" } }></i>
                                    </div>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Vacinnations</h6>
                                            <p className="mb-0 opacity-75">{ attributes.shots_current === true ? "Yes" : "Not Yet" }</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                                    <div>
                                        <i class="fa-solid fa-heart fa-xl" style={ { color: "#c74d3c" } }></i>
                                    </div>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">Good with other animals</h6>
                                            <p className="mb-0 opacity-75">Dogs: { environment.dogs === true ? "Yes" : "No" }</p>
                                            <p className="mb-0 opacity-75">Cats: { environment.cats === true ? "Yes" : "No" }</p>
                                        </div>
                                    </div>
                                </a>
                                <a name="" id="" className="mt-3 btn project-yellow" href={ url } role="button" target="blank">Go to Petfinder</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};
