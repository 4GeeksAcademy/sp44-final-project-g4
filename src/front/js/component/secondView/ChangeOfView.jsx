import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChangeOfView = ({ professionalType }) => {
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to={`/views/`}>
                        <button className="nav-link" id="vetTab" data-bs-toggle="tab" 
                        data-bs-target="#vetTab-pane" type="button" role="tab" 
                        aria-controls="vetTab-pane" aria-selected="false"></button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to={`/views/`}>
                        <button className="nav-link" id="groomerTab"  
                        type="button" 
                        ></button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to={`/views/`}>
                        <button className="nav-link" id="walkerTab" data-bs-toggle="tab" 
                        data-bs-target="#walkerTab-pane" type="button" role="tab" 
                        aria-controls="walkerTab-pane" aria-selected="false"></button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to={`/adoption/`}>
                        <button className="nav-link" id="adoptionTab" data-bs-toggle="tab" 
                        data-bs-target="#adoptionTab-pane" type="button" role="tab" 
                        aria-controls="adoptionTab-pane" aria-selected="false"></button>
                    </Link>
                </li>
            </ul>
        </>
    )
}