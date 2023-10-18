import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ImageDisplayDropDown } from './ImageDisplayDropDown.jsx';
import { SiteTitle } from './SiteTitle.jsx';

export const Navbar = () => {
    const { store, actions } = useContext( Context );
    const [ profilePicture, setProfilePicture ] = useState( localStorage.getItem( "avatar" ) );
    const [ isLogged, setisLogged ] = useState( localStorage.getItem( "email" ) );
    const [ redirect, setRedirect ] = useState( false );


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

            {/* newNAvbar */ }
            <nav className="navbar navbar-expand-lg navbar-light main-contrast">
                <div className="container-fluid">
                    <h1 className=" project-text-contrast main-title mt-1 me-3" href="#">Furry Paws</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className=" nav-link text-white me-3 align-self-center" to="/">Home </Link>
                            </li>
                            <li className="nav-item">

                                <Link className=" nav-link text-white me-3" to="/blog">Blog </Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link text-white me-3" to="/adoption">Adoption </Link>

                            </li>

                        </ul>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-end align-items-center">


                        { isLogged !== null && <div className="dropdown d-flex justify-content-end">
                            <ImageDisplayDropDown image={ profilePicture } />
                            { isLogged !== null &&
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button onClick={ handleLogout } type="button" className="btn  mt-2 me-2  btn-sm">Logout</button>
                                </div>
                            }



                        </div> }
                        { isLogged === null &&
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn  mt-2 me-2" to="/login" relative="path">Login</Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
            {/*  end newNAvbar */ }


            { redirect && <Navigate to="/" replace /> }



        </>
    );
}


