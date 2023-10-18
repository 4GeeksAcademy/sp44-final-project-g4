import React from "react";
import { Link } from "react-router-dom";

export const CardWalker = () => {

    return (
        <>
            <div className="card mb-3 main-light-blue-bg">
                <div className="card-header">Walkers</div>
                <Link to={`/views/`} state="walker">
                    <img
                        src="https://images.pexels.com/photos/7210537/pexels-photo-7210537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        className="w-50"
                        alt="Walkers"
                    />
                </Link>
            </div>
        </>
    );
};