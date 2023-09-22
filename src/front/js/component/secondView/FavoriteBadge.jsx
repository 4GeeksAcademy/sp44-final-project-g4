import React from 'react';

export const FavoriteBadge = ( { userId, professionalId, type } ) => {
    const backend = "https://sample-service-name-9dn1.onrender.com/api/";

    const handleFavorite = () => {
        const myHeaders = new Headers();
        myHeaders.append( "Content-Type", "application/json" );
        myHeaders.append( "Access-Control-Allow-Origin", "*" );

        let raw;

        if ( type === "vet" ) {
            const rawContent = JSON.stringify( {
                "user_id": userId,
                "vet_id": professionalId
            } );
            raw = rawContent;
        } else if ( type === "walker" ) {
            const rawContent = JSON.stringify( {
                "user_id": userId,
                "walker_id": professionalId
            } );
            raw = rawContent;
        } else if ( type === "groomer" ) {
            const rawContent = JSON.stringify( {
                "user_id": userId,
                "groomer_id": professionalId
            } );
            raw = rawContent;
        }

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch( `${ backend }favorite/${ userId }/${ type }`, requestOptions )
            .then( response => response.text() )
            .then( result => console.log( result ) )
            .catch( error => console.log( 'error', error ) );
    };

    return (
        <>
            <div clasName="container ">
                <h6>Save in Favorites</h6>
                <button
                    onClick={ handleFavorite }
                    type="button"
                    className="btn btn-outline-warning"><i className="fa-solid fa-star fa-lg" style={ { color: "#f1d801" } }></i></button>
            </div>

        </>
    );
};
