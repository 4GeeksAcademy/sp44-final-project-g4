import React from "react";
import { CardVet } from "./cards/CardVet.jsx";
import { CardGroomer } from "./cards/CardGroomer.jsx";
import { CardWalker } from "./cards/CardWalker.jsx";

import { CardAdoption } from "./cards/CardAdoption.jsx";




export const LowerView = () => {
    return (
        <>
            <div className="container text-center" style={{ Width: "120rem" }}>
                <div className="d-flex justify-content-center">
                    <div className="me-5"><CardVet /></div>
                    <div className="me-5 ms-4"><CardGroomer /></div>
                    <div className="me-5 ms-4"><CardWalker /></div>
                    <div className="ms-4"><CardAdoption /> </div>
                </div>
            </div>
        </>
    );
}; 