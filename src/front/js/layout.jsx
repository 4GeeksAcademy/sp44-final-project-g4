import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home.jsx";
import injectContext from "./store/appContext";
import { Login } from "./pages/Login.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { VetView } from './pages/vetView.jsx'
import { NewView } from "./pages/NewView.jsx";
import { Footer } from './component/footer/Footer.jsx'
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route to="/list" element={<Home/>}/>
                        <Route element={<Login/>} path="/login" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<VetView />} path="/vet" />
                        <Route element={<NewView />} path="/view" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};



export default injectContext(Layout);

