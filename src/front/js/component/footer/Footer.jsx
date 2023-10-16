import React from 'react';
import { DevelopersComponent } from './footerComponents/DevelopersComponent.jsx';
import { InfographicComponent } from './footerComponents/InfographicComponent.jsx';
import { SocialMediaComponent } from './footerComponents/SocialMediaComponent.jsx';
import { LogoComponent } from './footerComponents/LogoComponent.jsx';
import { SiteTitle } from '../SiteTitle.jsx';


const dummyPicture = "https://free-url-shortener.rb.gy/url-shortener.png";

export const Footer = () => {
    return (

        <footer className='footer mt-auto bg-light text-dark p-5 project-light'>
            <div className='container text-center text-md-start'>
                <div className='row text-center text-md-start'>
                    {/* Aqui poner el componente con el logo de la web*/ }
                    <SiteTitle />
                    <InfographicComponent />
                    <DevelopersComponent />
                    <hr className='mb-2' />
                    <SocialMediaComponent />

                </div>
            </div>
        </footer>
    );
};
