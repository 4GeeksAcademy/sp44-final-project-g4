import React from 'react';

export const addressCheck = async () => {
    try {
        const response = await fetch( 'https://api.geoapify.com/v1/geocode/autocomplete?text=229 W 121st Tenant Association&apiKey=7e3155f7560c47e7ade9ae1fb749ccff' );
        const data = await response.json();

        return data;

    } catch ( error ) {
        console.log( error );
    }
};
