import React from "react";
import { CardVet } from "./cards/CardVet.jsx";
import { CardGroomer } from "./cards/CardGroomer.jsx";
import { CardWalker } from "./cards/CardWalker.jsx";

import { CardAdoption } from "./cards/CardAdoption.jsx";




export const LowerView = () => {
    return (
        <>
            <div className="container text-center  mb-5 ps-0 pe-0" style={{ Width: "120rem" }}>
                <div className="d-flex flex-wrap">
                    <div className="ps-0 me-5"><CardVet /></div>
                    <div className="me-5"><CardGroomer /></div>
                    <div className="me-5"><CardWalker /></div>
                    <div className="pe-0 me-0"><CardAdoption /></div>
                </div>
            </div>
        </>
    );
}; 