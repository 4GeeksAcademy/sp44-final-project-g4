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
                        <button className="nav-link" id="adoptionTab" data-bs-toggle="tab" data-bs-target="#adoptionTab-pane" type="button" role="tab" aria-controls="adoptionTab-pane" aria-selected="false"><img src="src/front/img/Adopcion.png" alt="adopcion" /></button>
                    </Link>
                </li>
            </ul>
            <div className="selectIcons" id="professionalIcons">
                <div className="iconVet fade show active" id="vet-icon" role="tabpanel" aria-labelledby="vet-tab" tabIndex="0"></div>
                <div className="iconGroomer fade" id="groomer-icon" role="tabpanel" aria-labelledby="groomer-tab" tabIndex="1"></div>
                <div className="iconWalker fade" id="walker-icon" role="tabpanel" aria-labelledby="walker-tab" tabIndex="2"></div>
                <div className="iconAdoption fade" id="adoption-icon" role="tabpanel" aria-labelledby="adoption-tab" tabIndex="3">Aqui se muestran la pagina de adopcion</div>
            </div>
        </>
    )
}