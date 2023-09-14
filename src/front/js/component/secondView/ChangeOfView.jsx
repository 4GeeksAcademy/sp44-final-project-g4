import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom



export const ChangeOfView = () => {
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
                        <button className="nav-link" id="groomerTab" data-bs-toggle="tab" 
                        data-bs-target="#groomerTab-pane" type="button" role="tab" 
                        aria-controls="groomerTab-pane" aria-selected="false"></button>
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