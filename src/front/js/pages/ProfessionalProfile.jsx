import React, { useState, useContext, useEffect } from "react";
import { Avatar } from "../component/professionalProfile/Avatar.jsx";
import { Profile } from "../component/professionalProfile/Profile.jsx";
import { Description } from "../component/professionalProfile/Description.jsx";
import { Reviews } from "../component/professionalProfile/Reviews.jsx";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../component/Navbar.jsx";

export const ProfessionalProfile = () => {
    const { state } = useLocation();
    const [ user, setUser ] = useState( '' );

    useEffect( () => {
        console.log( localStorage.getItem( "user" ) );
        setUser( JSON.parse( localStorage.getItem( "user" ) ) );

    }, [] );
    useEffect( () => {
        console.log( localStorage.getItem( "user" ) );
        setUser( JSON.parse( localStorage.getItem( "user" ) ) );

    }, [ user ] );

    const handleClick = () => {
        console.log( user );
    };

    return (
        <>
            <Navbar />
            <div className="project-light">
                <button onClick={ handleClick } >Click me</button>
                <div className="container text-center mb-3">
                    <h3> Professional Profile </h3>
                    <div className="row row-cols-2">
                        <div className="col-3  border-end border-3">
                            <Avatar avatar={ user.avatar } />
                            <Description />
                        </div>
                        <div className="col-9" style={ { paddingLeft: "0", paddingRight: "0" } }>
                            <Profile user={ user } />
                        </div>
                        <div className="col-3  border-end border-3">
                        </div>
                        {/* <div className="col-9 mt-2">
                            <Reviews />
                        </div> */}
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={ { paddingRight: "7rem" } }>
                    <Link to="/edit-profile" state={ user } type="button" className="btn btn-primary">Edit Profile</Link>
                </div>
            </div>
        </>
    );
};