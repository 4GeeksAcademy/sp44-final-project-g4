import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/footer/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { SecondView } from "./pages/SecondView.jsx";
import { Login } from "./pages/Login.jsx";
import { ProfessionalProfile } from "./pages/ProfessionalProfile.jsx";
import { UserView } from "./pages/UserView.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if ( !process.env.BACKEND_URL || process.env.BACKEND_URL == "" ) return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={ basename }>
                <ScrollToTop>
                    {/* <Navbar /> */ }
                    <Routes>

                        <Route element={ <Home /> } path="/" />
                        <Route element={ <Login /> } path="/login" />
                        <Route element={ <SecondView /> } path="/views" />
                        <Route element={ <UserView /> } path="/user-view" />
                        <Route element={ <ProfessionalProfile /> } path="/pro-profile" />
                        <Route element={ <UserView /> } path="/user-profile" />
                    </Routes>

                    {/* { <Footer /> } */ }

                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};



export default injectContext( Layout );


