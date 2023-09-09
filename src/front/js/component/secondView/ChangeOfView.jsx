import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfessionalView } from "./ProfessionalView.jsx";


export const ChangeOfView = () => {
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Vet</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Groomer</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Walker</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#adoption-tab-pane" type="button" role="tab" aria-controls="adoption-tab-pane" aria-selected="false">Adoption</button>
                </li>
            </ul>
            <div className="selectIcons" id="professionalIcons">
                <div className="iconVet fade show active" id="vet-icon" role="tabpanel" aria-labelledby="vet-tab" tabindex="0"></div>
                <div className="iconGroomer fade" id="groomer-icon" role="tabpanel" aria-labelledby="groomer-tab" tabindex="1"></div>
                <div className="iconWalker fade" id="walker-icon" role="tabpanel" aria-labelledby="walker-tab" tabindex="2"></div>
                <div className="iconAdoption fade" id="adoption-icon" role="tabpanel" aria-labelledby="adoption-tab" tabindex="3">Aqui se muestran la pagina de adopcion</div>
            </div>
        </>
    )
}