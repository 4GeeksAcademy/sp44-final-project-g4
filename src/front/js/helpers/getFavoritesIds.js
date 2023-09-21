import React from 'react';

export const getFavoritesIds = ( userId ) => {
    const myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );
    myHeaders.append( "Access-Control-Allow-Origin", "*" );

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'

    };

    Promise.all( [
        fetch( `https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/favorite/${ userId }/walker`, requestOptions ),
        fetch( `https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/favorite/1694574930/groomer`, requestOptions ),
        fetch( `https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/favorite/${ userId }/vet`, requestOptions )
    ] ).then( responses => {
        return Promise.all( responses.map( res => res.json() ) );
    } ).then( data => {
        console.log( data[ 0 ].response.map( favorite => favorite.WalkerId ) );
        console.log( data[ 1 ].response.map( favorite => favorite.GroomerId ) );
        console.log( data[ 2 ].response.map( favorite => favorite.VetId ) );
        const favWalker = data[ 0 ].response.map( favorite => favorite.WalkerId );
        const favGroomer = data[ 1 ].response.map( favorite => favorite.GroomerId );
        const favVet = data[ 2 ].response.map( favorite => favorite.VetId );
        return {
            favWalker,
            favGroomer,
            favVet
        };
    } );
};
