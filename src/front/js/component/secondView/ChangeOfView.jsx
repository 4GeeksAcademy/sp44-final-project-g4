import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom



export const ChangeOfView = () => {
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to={`/vet/`}>
                        <button className="nav-link" id="vetTab" data-bs-toggle="tab" data-bs-target="#vetTab-pane" type="button" role="tab" aria-controls="vetTab-pane" aria-selected="false"><img src="src/front/img/Vet.png" alt="vet" /></button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to={`/groomer/`}>
                        <button className="nav-link" id="groomerTab" data-bs-toggle="tab" data-bs-target="#groomerTab-pane" type="button" role="tab" aria-controls="groomerTab-pane" aria-selected="false"><img src="src/front/img/Groomer.png" alt="groomer" /></button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to={`/walker/`}>
                        <button className="nav-link" id="walkerTab" data-bs-toggle="tab" data-bs-target="#walkerTab-pane" type="button" role="tab" aria-controls="walkerTab-pane" aria-selected="false"><img src="src/front/img/Walker.png" alt="walker" /></button>
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to={`/adoption/`}>
                        <button className="nav-link" id="adoptionTab" data-bs-toggle="tab" data-bs-target="#adoptionTab-pane" type="button" role="tab" aria-controls="adoptionTab-pane" aria-selected="false"><img src="src/front/img/Adopcion.png" alt="adoption" /></button>
                    </Link>
                </li>
            </ul>
        </>
    )
}