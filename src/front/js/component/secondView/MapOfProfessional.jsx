import React, { useEffect } from "react";
import MapComponent from "../map/MapComponent.jsx";

export const MapOfProfessional = ( { type } ) => {
    useEffect( () => {

    }, [ type ] );

    return (
        <>
            <MapComponent type={ type } />
        </>
    );
};