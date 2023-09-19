import React, { useEffect, useState } from "react";


export const UserProfile = () => {
    const [ user, setUser ] = useState( '' );

    useEffect( () => {
        setUser( JSON.parse( localStorage.getItem( "user" ) ) );
    }, [] );

    return (
        <>
            <div className="text-start border-bottom border-2">
                <ul>
                    <p>{ user.name } { user.last_name }</p>
                    <p>Email: { user.email }</p>
                    <p>Phone: { user.phone_number }</p>
                    <p>Address: { user.address }</p>
                    <p>Zip code: { user.zip_code }</p>
                    <p>Member since: { user.created_at }</p>
                </ul>
            </div>
        </>
    );
};