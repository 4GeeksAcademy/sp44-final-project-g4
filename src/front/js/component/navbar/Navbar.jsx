import React from 'react';
import { LogoDisplay } from './navbarComponents/LogoDisplay.jsx';
import { SingComponent } from './navbarComponents/SingComponent.jsx';
import { ProfileDropdown } from './navbarComponents/ProfileDropdown.jsx';
import { ImageDisplay } from "../ImageDisplay.jsx";

export const Navbar = () => {
    return (
        <>
            {/* <div>soy el Navbar</div> */ }
            {/*Componente de LOGO */ }
            {/* <LogoDisplay /> */ }
            {/*Componente LOGO END*/ }

            {/*Componente SING UP -- SING IN*/ }
            {/* <SingComponent /> */ }
            {/*Componente SING UP--IN  END*/ }

            {/*Componente profile-dropdown*/ }
            {/* <ProfileDropdown /> */ }
            {/* Componente profile-dropdown END */ }


            <div className="dropdown bg-success text-end">
                <ImageDisplay image="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd" />
            </div>

        </>
    );
}


