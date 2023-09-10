import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const ProfessionalView = () => {
    return(
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="listTab" data-bs-toggle="tab" data-bs-target="#listTab-pane" type="button" role="tab" aria-controls="listTab-pane" aria-selected="true"><i className="fa-solid fa-list fa-2xl"></i></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="mapTab" data-bs-toggle="tab" data-bs-target="#mapTab-pane" type="button" role="tab" aria-controls="mapTab-pane" aria-selected="false"><i className="fa-solid fa-map-location-dot fa-2xl"></i></button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                {/* div del listado de profesionales */}
                <div className="tab-pane fade show active" id="listTab-pane" role="tabpanel" aria-labelledby="listTab" tabIndex="0">
                    <ul>
                        <li>
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid rounded-start" alt="profile picture"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* div donde se renderiza el mapa */}
                <div className="tab-pane fade" id="mapTab-pane" role="tabpanel" aria-labelledby="mapTab" tabIndex="1">
                <img src="https://www.softandapps.info/wp-content/uploads/2016/05/Crear-mapas-online-Mapme.jpg" className="img-fluid rounded-start" style={{ maxHeight: "300px" }} alt="map picture"/>
                </div>
            </div>
        </>
    )
}

