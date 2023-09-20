import React, { useEffect, useState } from "react";



export const Description = () => {
    const [ user, setUser ] = useState( JSON.parse( localStorage.getItem( "user" ) ) );



    return (
        <>
            <div className="card-body main-title">
                <p>Description:
                    <br />
                    <span className="text-black">
                        { user.description }
                    </span>
                </p>
            </div>
        </>
    );
};