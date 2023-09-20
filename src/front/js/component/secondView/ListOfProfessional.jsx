import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useLocation } from "react-router-dom";
import { vets } from "../map/jsonCalls/vetCall-1.js";
import { groomers } from "../map/jsonCalls/groomerCall-1.js";
import { walkers } from "../map/jsonCalls/walkerCall-1.js";
import { RegisteredProfessionalCard } from "./RegisteredProfessionalCard.jsx";
import { UnsignedProfessionalCard } from "./UnsignedProfessionalCard.jsx";

export const ListOfProfessional = ( { type } ) => {
    const { store, actions } = useContext( Context );
    const [ professionals, setProfessionals ] = useState( [] );
    const [ unsignedProfessionals, setUnsignedProfessionals ] = useState( [] );
    const { state } = useLocation();



    useEffect( () => {
        if ( type === "vet" ) {
            setProfessionals( JSON.parse( localStorage.getItem( "vets" ) ) );
            setUnsignedProfessionals( vets );
        } else if ( type === "groomer" ) {
            setProfessionals( JSON.parse( localStorage.getItem( "groomers" ) ) );
            setUnsignedProfessionals( groomers );
        } else if ( type === 'walker' ) {
            setProfessionals( JSON.parse( localStorage.getItem( "walkers" ) ) );
            setUnsignedProfessionals( walkers );
        }

    }, [ type ] );

    const handleLog = () => {
        console.log( professionals );
    };

    const handleOnErrorImg = ( e ) => {
        e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    };

    return (
        <>

            <div className="container text-center mt-3">
                <RegisteredProfessionalCard professionals={ professionals } />
                <UnsignedProfessionalCard unsignedProfessionals={ unsignedProfessionals } />
            </div>
        </>
    );
};
