import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar/Navbar.jsx"
import { ChangeOfView } from "../component/secondView/ChangeOfView.jsx";
// import { LowerView } from "../component/lower_view/LowerView.jsx";


export const PrivateView = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="principal">
                <h1>
                    Spain 44 final project
                </h1>
                {/*Navbar */}
                <Navbar />
                <div className="secondView">
                    {/*Select Professional*/}
                    <ChangeOfView />
                </div>
                {/* <LowerView /> */}
                {/*Footer*/}
            </div>
        </>
    );
};