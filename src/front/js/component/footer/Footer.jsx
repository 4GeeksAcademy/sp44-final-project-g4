import React from 'react';
import { DevelopersComponent } from './footerComponents/DevelopersComponent.jsx';
import { InfographicComponent } from './footerComponents/InfographicComponent.jsx';
import { LogoComponent } from './footerComponents/LogoComponent.jsx';
import { SiteTitle } from '../SiteTitle.jsx';

const dummyPicture = "https://free-url-shortener.rb.gy/url-shortener.png";

export const Footer = () => {
    return (
        <footer className='footer bg-light text-dark mt-5 p-1 project-light'>
            <div className='container text-center'>
                <div className='row justify-content-center'>

                    <div className='col-12 col-md-4'>
                        <InfographicComponent />
                    </div>

                    <div className='col-12 col-md-4 mt-4'>
                        <SiteTitle />
                    </div>

                    <div className='col-12 col-md-4'>
                        <DevelopersComponent />
                    </div>

                </div>
            </div>
        </footer>
    );
};
