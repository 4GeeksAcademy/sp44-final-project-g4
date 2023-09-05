import React from 'react'
import { LogoDisplay } from './navbarComponents/LogoDisplay.jsx'
import { SingComponent } from './navbarComponents/SingComponent.jsx'
import { ProfileDropdown } from './navbarComponents/ProfileDropdown.jsx'


export const Navbar = () => {
    return (
        <>
            <div>soy el Navbar</div>
            {/*Componente de LOGO */}
            <LogoDisplay />
            {/*Componente LOGO END*/}

            {/*Componente SING UP -- SING IN*/}
            <SingComponent />
            {/*Componente SING UP--IN  END*/}

            {/*Componente profile-dropdown*/}
            <ProfileDropdown />
            {/*Componente profile-dropdown END */}

        </>
    )
}


