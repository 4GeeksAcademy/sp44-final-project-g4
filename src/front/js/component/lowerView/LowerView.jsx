import React from "react";
import { CardVet } from "./cards/CardVet.jsx";
import { CardGroomer } from "./cards/CardGroomer.jsx";
import { CardWalker } from "./cards/CardWalker.jsx";
import { CardAdoption } from "./cards/CardAdoption.jsx";



export const LowerView = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-3">
                    <div className="col-3"><CardVet /></div>
                    <div className="col-3"><CardGroomer /></div>
                    <div className="col-3"><CardWalker /></div>
                    <div className="col-3"><CardAdoption /></div>
                </div>
            </div>
        </>
    );
}; 