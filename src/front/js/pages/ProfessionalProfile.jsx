import React from "react";
import { Avatar } from "../component/professionalProfile/Avatar.jsx";
import { Profile } from "../component/professionalProfile/Profile.jsx";
import { Description } from "../component/professionalProfile/Description.jsx";
import { Reviews } from "../component/professionalProfile/Reviews.jsx";


export const ProfessionalProfile = () => {
    return (
        <>
            <div className="container text-center mb-3">
                <div className="row row-cols-2">
                    <div className="col  border-end border-3">
                        <Avatar />
                    </div>
                    <div className="col">
                        <Profile />
                    </div>
                    <div className="col  border-end border-3">
                        <Description />
                    </div>
                    <div className="col">
                        <Reviews />
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-primary">Edit Profile</button>
                <div className="vr"></div>
                <button type="button" className="btn btn-success">Save Change</button>
            </div>
        </>
    )
}