import React from 'react';
import { DevelopersComponent } from './footerComponents/DevelopersComponent.jsx';
import { InfographicComponent } from './footerComponents/InfographicComponent.jsx';
import { SocialMediaComponent } from './footerComponents/SocialMediaComponent.jsx';
import { LogoComponent } from './footerComponents/LogoComponent.jsx';


const dummyPicture = "https://free-url-shortener.rb.gy/url-shortener.png";

export const Footer = () => {
    return (

        <footer className='footer mt-auto bg-light text-dark p-5 project-light'>
            <div className='container text-center text-md-start'>
                <div className='row text-center text-md-start'>
                    {/* Aqui poner el componente con el logo de la web*/ }
                    <LogoComponent image={ "https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" } />
                    <InfographicComponent />
                    <DevelopersComponent />
                    <hr className='mb-2' />
                    <SocialMediaComponent />

                </div>
            </div>
        </footer>
    );
};
