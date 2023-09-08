import React from "react";
import { Card } from "../cards/Card.jsx";



export const LowerView = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-3">
                    <div className="col-3"><Card /></div>
                    <div className="col-3"><Card /></div>
                    <div className="col-3"><Card /></div>
                    <div className="col-3"><Card /></div>
                </div>
            </div>
        </>
    )
} 