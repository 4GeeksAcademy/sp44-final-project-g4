import React from 'react';

export const updateProfessionalProfile = async ( event, initialObject = {}, type, id ) => {
    const backend = "https://sample-service-name-9dn1.onrender.com/api/";

    const myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );

    const raw = JSON.stringify( {
        ...initialObject
    } );

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch( `${ backend }professional/${ id }/${ type }`, requestOptions );
        if ( !response.ok ) {
            throw new Error( "Failed to fetch data, status code: " + response.status );
        }
        const data = await response.json();
        console.log( data );

        localStorage.setItem( "user", JSON.stringify( data.professional ) );
        localStorage.setItem( "id", id );
        return data;
    } catch ( error ) {
        console.error( "An error occurred while fetching data:", error );
    } finally {
        console.log( "Data fetch operation completed" );
    }
};
