import React from 'react';

export const signUp = async ( event, initialObject = {}, type ) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );
    myHeaders.append( "Origin", "*" );
    myHeaders.append( "Access-Control-Allow-Origin", "https://literate-tribble-x5wv7xv7gw6cpp4-3000.preview.app.github.dev/" );

    const raw = JSON.stringify( {
        "name": "2hsytryr",
        "last_name": "gigo",
        "email": "olaayiii6666666@mail.com",
        "password": "7333484787474"
    } );

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {

        // here need to make it dynamic so vets user walkers can sign in

        const res = await fetch( "https://literate-tribble-x5wv7xv7gw6cpp4-3001.preview.app.github.dev/api/signup/user", requestOptions );

        const data = await res.json();

        return data;

    } catch ( error ) {
        throw new Error( error );
    }
};
