import React, { useEffect, useState } from "react";


export const Profile = ( { user } ) => {

    return (
        <>
            <div className="text-start border-bottom border-2">
                <ul>
                    <p>Name: { user.name } </p>
                    <p>Company name: { user.company_name } </p>
                    <p>Email: { user.email } </p>
                    <p>Phone: { user.phone }</p>
                    <p>Address: { user.address }</p>
                    <p>Zip code: { user.zip_code } </p>
                    <p>Price low: { user.price_low } </p>
                    <p>Price high:{ user.price_high } </p>
                    <p>Services: { user.services } </p>
                    <p>Member since: { user.create_at } </p>
                </ul>
            </div>
        </>
    );
};