import React from 'react';
import { DevelopersComponent } from './footerComponents/DevelopersComponent.jsx';
import { InfographicComponent } from './footerComponents/InfographicComponent.jsx';
import { LogoComponent } from './footerComponents/LogoComponent.jsx';


const dummyPicture = "https://free-url-shortener.rb.gy/url-shortener.png";

export const Footer = () => {
    return (

        <footer className='footer bg-light text-dark mt-5 p-1 project-light'>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    {/* Aqui poner el componente con el logo de la web*/ }
                    <div className='col-12 col-md-4'>
                    <LogoComponent />
                    </div>
                    <div className='col-12 col-md-4 mt-4'>
                    <InfographicComponent />
                    </div>
                    <div className='col-12 col-md-4 mt-3'>
                    <DevelopersComponent />
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}