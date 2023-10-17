import React from "react";
import { Link } from "react-router-dom";



export const CardAdoption = () => {

    return (
        <>
            <div className="card mb-3 main-light-blue-bg" style={ { maxWidth: "20rem" } }>
                <div className="card-header">Adoptions</div>
                <Link to="/adoption" >
                    <img src="https://images.pexels.com/photos/16614830/pexels-photo-16614830/free-photo-of-mujer-animal-perro-mascota.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        style={ { maxWidth: "15rem" } } alt="adoption" />
                </Link>
            </div>
        </>
    );
};