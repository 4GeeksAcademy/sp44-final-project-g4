import React from "react";
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
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"><p><ProfessionalView /></p></div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"><p>Aqui se muestran los groomers</p></div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Aqui se muestran los walker</div>
                <div className="tab-pane fade" id="adoption-tab-pane" role="tabpanel" aria-labelledby="adoption-tab" tabindex="0">Aqui se muestran la pagina de adopcion</div>
            </div>
        </>
    )
}