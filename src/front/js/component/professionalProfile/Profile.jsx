import React from "react";


export const Profile = () => {
    return(
        <>
            <div className="text-start border-bottom border-2">
                <ul>
                    <p>{professional.name} {professional.last_name}</p>
                    <p>Company name: {professional.company_name}</p>
                    <p>Email: {professional.email}</p>
                    <p>Phone: {professional.phone_number}</p>
                    <p>Address: {professional.addres}</p>
                    <p>Zip code: {professional.zip_code}</p>
                    <p>Price low: {professional.price_low}</p>
                    <p>Price high: {professional.price_high}</p>
                    <p>Services: {professional.services}</p>
                    <p>Created on: {professional.created_at}</p>
                </ul>
            </div>
        </>
    )
}