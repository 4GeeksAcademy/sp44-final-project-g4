import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';


export const ImageDisplayDropDown = ( { image } ) => {
    const { store, actions } = useContext( Context );
    const [ userType, setUserType ] = useState( localStorage.getItem( "type" ) );

    useEffect( () => {
        setUserType( localStorage.getItem( "type" ) );
    }, [ userType ] );





    return (
        <>
            { userType !== null && <div className="dropdown  text-end index-front">
                <img style={ { height: "60px", width: "60px", borderRadius: "50%" } } src={ image } id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" alt="" className="p-1" />
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">

                    { userType !== 'user' && <li><Link to="/pro-profile" className="dropdown-item" href="#">View Profile</Link></li> }
                    <li className='index-front'><Link to="/user-profile" className="dropdown-item" href="#">View userProfile</Link></li>
                    <li><a className="dropdown-item" href="#">Favorites</a></li>

                </ul>

            </div>
            }

        </>
    );
};
