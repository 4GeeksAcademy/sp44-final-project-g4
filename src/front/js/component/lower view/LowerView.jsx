import React from "react";
import { Card } from "../cards/Card.jsx";



export const LowerView = () => {
    return (
        <>
            <div class="container text-center">
                <div class="row row-cols-3">
                    <div class="col-3"><Card /></div>
                    <div class="col-3"><Card /></div>
                    <div class="col-3"><Card /></div>
                    <div class="col-3"><Card /></div>
                </div>
            </div>
        </>
    )
} 