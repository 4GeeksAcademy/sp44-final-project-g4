import React, { useEffect, useState } from "react";


export const Profile = ( { user } ) => {

    return (
        <>
            <div className="text-start border-bottom border-2">
                <ul>
                    <p><span className="main-title">Name: </span> { user.name } </p>
                    <p><span className="main-title">Company Name: </span> { user.company_name } </p>
                    <p><span className="main-title">Email: </span> { user.email } </p>
                    <p><span className="main-title">Contact: </span> { user.phone }</p>
                    <p><span className="main-title">Address: </span>{ user.address }</p>
                    <p><span className="main-title">Zip Code: </span> { user.zip_code } </p>
                    <p><span className="main-title">Price from: </span>{ user.price_low } </p>
                    <p><span className="main-title">Price until </span>{ user.price_high } </p>
                    <p><span className="main-title">Services </span>{ user.services } </p>
                    <p><span className="main-title">Member since: </span> { user.create_at } </p>
                </ul>
            </div>
        </>
    );
};