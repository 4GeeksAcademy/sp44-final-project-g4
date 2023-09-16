import React from "react";
import { MapOfProfessional } from "./MapOfProfessional.jsx";
import { ListOfProfessional } from "./ListOfProfessional.jsx";
import { ChangeOfView } from "./ChangeOfView.jsx";



export const ProfessionalView = ({ type }) => {
    return (
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
                <h2 className="card-title">List Of Professional</h2>
                    <ListOfProfessional />
                </div>
                {/* div donde se renderiza el mapa */}
                <div className="tab-pane fade" id="mapTab-pane" role="tabpanel" aria-labelledby="mapTab" tabIndex="1">
                <h2 className="card-title">Map Of Professional</h2>
                    <MapOfProfessional />
                </div>
            </div>
        </>
    )
}

