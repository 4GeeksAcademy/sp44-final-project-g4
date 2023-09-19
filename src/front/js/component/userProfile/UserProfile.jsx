import React from "react";


export const UserProfile = () => {
    return(
        <>
            <div className="text-start border-bottom border-2">
                <ul>
                    <p>{user.name} {user.last_name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone_number}</p>
                    <p>Address: {user.addres}</p>
                    <p>Zip code: {user.zip_code}</p>
                    <p>Created on: {user.created_at}</p>
                </ul>
            </div>
        </>
    )
}