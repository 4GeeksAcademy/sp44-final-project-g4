import React from 'react';

export const updateProfessionalProfile = async ( event, initialObject = {}, type, userImage, id ) => {
    const profilePicture = JSON.parse( localStorage.getItem( "user" ) ).avatar;

    if ( profilePicture === userImage ) {
        initialObject.avatar = profilePicture;
    }
    initialObject.avatar = userImage;

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
        const response = await fetch( `https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/professional/${ id }/${ type }`, requestOptions );
        if ( !response.ok ) {
            throw new Error( "Failed to fetch data, status code: " + response.status );
        }
        const data = await response.json();
        console.log( data );
        localStorage.removeItem( "user" );
        localStorage.setItem( "user", JSON.stringify( data.professional ) );
        return data;
    } catch ( error ) {
        console.error( "An error occurred while fetching data:", error );
    } finally {
        console.log( "Data fetch operation completed" );
    }
};
