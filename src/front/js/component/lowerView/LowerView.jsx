import React from "react";
import { CardVet } from "./cards/CardVet.jsx";
import { CardGroomer } from "./cards/CardGroomer.jsx";
import { CardWalker } from "./cards/CardWalker.jsx";

import { CardAdoption } from "./cards/CardAdoption.jsx";




export const LowerView = () => {
    return (
        <>
            <div className="container text-center  mb-5">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="m-2"><CardVet /></div>
                    <div className="m-2"><CardGroomer /></div>
                    <div className="m-2"><CardWalker /></div>
                    <div className="m-2"><CardAdoption /></div>
                </div>
            </div>
        </>
    );
}; 