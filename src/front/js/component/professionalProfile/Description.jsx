import React, { useEffect, useState } from "react";



export const Description = () => {
    const [ user, setUser ] = useState( '' );

    useEffect( () => {
        setUser( JSON.parse( localStorage.getItem( "user" ) ) );
    }, [] );

    return (
        <>
            <div className="card-body">
                <p>Description:
                    { user.description }
                </p>
            </div>
        </>
    );
};