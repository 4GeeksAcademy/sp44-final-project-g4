import React from "react";
import { Link } from "react-router-dom";



export const CardGroomer = () => {

    return (
        <>
            <div className="card mb-3 main-light-blue-bg">
                <div className="card-header">Groomers</div>
                <Link to={`/views/`} state="groomer">
                    <img src="https://images.pexels.com/photos/6816841/pexels-photo-6816841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    style={ {maxWidth: "15rem"} } alt="groomers" />
                </Link>
            </div>
        </>
    )
}