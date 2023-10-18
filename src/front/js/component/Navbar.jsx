import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ImageDisplayDropDown } from './ImageDisplayDropDown.jsx';
import { SiteTitle } from './SiteTitle.jsx';


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [profilePicture, setProfilePicture] = useState(localStorage.getItem("avatar"));
    const [isLogged, setisLogged] = useState(localStorage.getItem("email"));
    const [redirect, setRedirect] = useState(false);


    const handleLogout = () => {
        setisLogged(null);
        actions.logout();
        console.log(store);
        setProfilePicture(null);
        setisLogged(null);
        setRedirect(true);
    };

    useEffect(() => {

        console.log(store.loggedUser);


    }, [store.loggedUser.length]);


    return (
        <>
            <div className="container-fluid d-flex justify-content-between main-contrast">
                <div className="d-flex align-items-end" >
                    <SiteTitle />
                </div>

                {redirect && <Navigate to="/" replace />}
                <div className="d-flex justify-content-end align-items-center" style={{ marginRight: "10px" }}>
                    <div className="">
                        <ul className=" d-flex justify-content-start list-unstyled ">
                            <li className="nav-item active mt-3 me-3">
                                <div className="nav-item ">
                                    <Link className="text-white me-3" to="/">Home </Link>
                                    <Link className="text-white me-3" to="/blog">Blog </Link>
                                    <Link className="text-white me-3" to="/adoption">Adoption </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div>
                        {isLogged !== null &&
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button onClick={handleLogout} type="button" className="btn  mt-2 me-2  bg-white">Logout</button>
                            </div>
                        }


                        {isLogged === null &&
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn  mt-2 me-2 bg-white" to="/login" relative="path">Login</Link>
                            </div>
                        }
                        {/* <Link className="btn btn-outline-primary mt-2 me-2" to="/login" relative="path">Login</Link> */}
                    </div>
                    {isLogged !== null && <div className="dropdown d-flex justify-content-end">
                        <ImageDisplayDropDown image={profilePicture} />
                    </div>}
                </div>
            </div>



        </>
    );
}


