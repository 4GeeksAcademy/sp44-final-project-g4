import React from "react";
import { Link } from "react-router-dom";

export const CardVet = () => {

    return (
        <>
            <div className="card mb-3 main-light-blue-bg">
                <div className="card-header">Veterinarians</div>
                <Link to={ `/views/` } state="vet">
                    <img src="https://images.pexels.com/photos/7469214/pexels-photo-7469214.jpeg?auto=compress&cs=tinysrgb&w=600"
                        style={ { maxWidth: "15rem" } } alt="veterinarians" />
                </Link>
            </div>
        </>
    );
};