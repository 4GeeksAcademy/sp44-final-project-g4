import React, { useEffect, useState } from "react";
import { MapOfProfessional } from "./MapOfProfessional.jsx";
import { ListOfProfessional } from "./ListOfProfessional.jsx";
import { ChangeOfView } from "./ChangeOfView.jsx";



export const ProfessionalView = ( { typeSearch } ) => {
    const [ professionalType, setProfessinalType ] = useState( typeSearch );


    const handleProfessionalType = ( type ) => {
        setProfessinalType( type );
        localStorage.setItem( "professionalType", type );
    };

    useEffect( () => {
    }, [] );


    return (
        <>

            <ChangeOfView professionalType={ handleProfessionalType } />
            <div className="position-fixed mt-5 ms-5 pt-0 index-front main-mild-blue-bg">

                <ul className="nav nav-tabs " id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="listTab" 
                        data-bs-toggle="tab" data-bs-target="#listTab-pane" 
                        type="button" role="tab" aria-controls="listTab-pane" 
                        aria-selected="true"><i className="fa-solid fa-list fa-2xl"></i></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="mapTab" 
                        data-bs-toggle="tab" data-bs-target="#mapTab-pane" 
                        type="button" role="tab" aria-controls="mapTab-pane" 
                        aria-selected="false"><i className="fa-solid fa-map-location-dot fa-2xl"></i></button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="myTabContent">
                {/* div del listado de profesionales */ }
                <div className="tab-pane fade show active" id="listTab-pane" 
                role="tabpanel" aria-labelledby="listTab" tabIndex="0">
                    <ListOfProfessional type={ professionalType } />
                </div>
                {/* div donde se renderiza el mapa */ }
                <div className="tab-pane fade" id="mapTab-pane" role="tabpanel" aria-labelledby="mapTab" tabIndex="1">
                    <div className="container project-light mt-3 mb-3 p-3 rounded">
                        <h2 className="main-title" style={ { fontSize: "50px" } }>Map Of Professionals</h2>
                    </div>
                    <MapOfProfessional type={ professionalType } />
                </div>
            </div>
        </>
    );
}

