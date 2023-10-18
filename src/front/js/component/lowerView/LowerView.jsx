import React from "react";
import { CardVet } from "./cards/CardVet.jsx";
import { CardGroomer } from "./cards/CardGroomer.jsx";
import { CardWalker } from "./cards/CardWalker.jsx";

import { CardAdoption } from "./cards/CardAdoption.jsx";




export const LowerView = () => {
    return (
       
        <div className="container text-center mb-5 ps-0 pe-0" style={{ width: "80rem" }}>
        <div className="d-flex flex-wrap">
          <div className="flex-fill me-3"><CardVet /></div>
          <div className="flex-fill me-3"><CardGroomer /></div>
          <div className="flex-fill me-3"><CardWalker /></div>
          <div className="flex-fill"><CardAdoption /></div>
        </div>
      </div>
       
    );
}; 