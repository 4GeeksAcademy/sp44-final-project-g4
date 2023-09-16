import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { useLocation } from "react-router-dom";


export const ListOfProfessional = () => {
    const { store, actions } = useContext( Context );
    const [ professionals, setProfessionals ] = useState( [] );
    const { state } = useLocation();




    const fetchDataProfessional= () => {
        actions.fetchData( state, state )
            .then( data => {
                console.log( data );
                setProfessionals( data.results );
            } );
    };
    useEffect( () => {
        fetchDataProfessional();

    }, [] );


    const handleOnErrorImg = ( e ) => {
        e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    };

    return (
        <>
            <ul>
                { professionals.length > 0 && professionals.map( ( professional ) => (
                    <li key={ professional.id }>
                        <div className="card mb-3" style={ { maxWidth: "540px" } }>
                            <div className="row g-0">
                                <div className="col-4">
                                    <img
                                        src={ professional.avatar }
                                        className="img-fluid rounded-start"
                                        alt="profile picture"
                                        onError={ handleOnErrorImg }
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{ professional.name } { professional.last_name }</h5>
                                        <p className="card-text">Description: { professional.description }</p>
                                        <p className="card-text">Phone number: { professional.phone_number }</p>
                                        <p className="card-text">Email: { professional.email }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ) ) }
            </ul>
        </>
    );
};
