import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home.jsx";
import { SecondView } from "./pages/secondView.jsx";
import { VetView } from "./pages/vetView.jsx";
import { GroomerView } from "./pages/groomerView.jsx";
import { WalkerView } from "./pages/walkerView.jsx";
import { AdoptionView } from "./pages/adoptionView.jsx";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>                    
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<VetView/>} path="/vet" />
                        <Route element={<GroomerView/>} path="/groomer" /> 
                        <Route element={<WalkerView/>} path="/walker" /> 
                        <Route element={<AdoptionView/>} path="/adoption" /> 
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>                    
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
