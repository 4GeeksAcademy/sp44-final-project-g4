import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';


const defaultProfilePicture = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fprofileme.app%2F&psig=AOvVaw2w0EmguXoFZLFljR85-Tnw&ust=1697626302953000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNC0ifj0_IEDFQAAAAAdAAAAABAe";

export const ImageDisplayDropDown = ( { image } ) => {
    const { store, actions } = useContext( Context );
    const [ userType, setUserType ] = useState( localStorage.getItem( "type" ) );

    useEffect( () => {
        setUserType( localStorage.getItem( "type" ) );
    }, [ userType ] );




    return (
        <>
            { userType !== null && <div className="dropdown  text-end index-front">
                <img style={ { height: "60px", width: "60px", borderRadius: "50%" } } src={ image } onError={ ( e ) => {
                    e.target.onerror = null;
                    e.target.src = 'https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg';
                } } id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" alt="" className="p-1" />
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">

                    { userType !== 'user' && <li><Link to="/pro-profile" className="dropdown-item" href="#">View Profile</Link></li> }
                    <li className='index-front'><Link to="/user-profile" className="dropdown-item" href="#">View userProfile</Link></li>
                    <li><Link to="/favorite" className="dropdown-item" >Favorites</Link></li>

                </ul>

            </div>
            }

        </>
    );
};
