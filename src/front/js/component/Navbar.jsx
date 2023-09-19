import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ImageDisplayDropDown } from './ImageDisplayDropDown.jsx';

export const Navbar = () => {
    const { store, actions } = useContext( Context );
    const [ profilePicture, setProfilePicture ] = useState( localStorage.getItem( "avatar" ) );
    const [ isLogged, setisLogged ] = useState( localStorage.getItem( "email" ) );
    const [ redirect, setRedirect ] = useState( false );
    console.log( isLogged );

    const handleLogout = () => {
        setisLogged( null );
        actions.logout();
        console.log( store );
        setProfilePicture( null );
        setisLogged( null );
        setRedirect( true );
    };

    useEffect( () => {

        console.log( store.loggedUser );


    }, [ store.loggedUser.length ] );


    return (
        <>
            { redirect && <Navigate to="/" replace /> }

            <div className="project-blue d-flex justify-content-end ">
                <div>
                    { isLogged !== null &&
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={ handleLogout } type="button" className="btn  mt-2 me-2  bg-white">Logout</button>
                        </div>
                    }


                    { isLogged === null &&
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Link className="btn  mt-2 me-2 bg-white" to="/login" relative="path">Login</Link>
                        </div>
                    }
                    {/* <Link className="btn btn-outline-primary mt-2 me-2" to="/login" relative="path">Login</Link> */ }
                </div>
                <div className="dropdown d-flex justify-content-end">
                    <ImageDisplayDropDown image={ profilePicture } />
                </div>
            </div>


        </>
    );
}


