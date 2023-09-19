import React, { useState, useContext, useEffect } from "react";
import { UserAvatar } from "../component/userProfile/UserAvatar.jsx";
import { UserProfile } from "../component/userProfile/UserProfile.jsx";
import { UserDescription } from "../component/userProfile/UserDescription.jsx";
import { UserReviews } from "../component/userProfile/UserReviews.jsx"
import { useLocation } from "react-router-dom";

export const ProfessionalProfile = () => {
    const { state } = useLocation();
    return (
        <>
            <div className="container text-center mb-3">
                <h3> Professional Profile </h3>
                <div className="row row-cols-2">
                    <div className="col-3  border-end border-3">
                        <UserAvatar />
                    </div>
                    <div className="col-9" style= {{paddingLeft: "0", paddingRight: "0"}}>
                        <UserProfile />
                    </div>
                    <div className="col-3  border-end border-3">
                        <UserDescription />
                    </div>
                    <div className="col-9 mt-2">
                        <UserReviews />
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style= {{paddingRight: "7rem"}}>
                <button type="button" className="btn btn-primary">Edit Profile</button>
            </div>
        </>
    )
}