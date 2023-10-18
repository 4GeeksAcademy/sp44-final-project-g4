import React from 'react';

export const SocialMediaComponent = () => {
    return (
        <div>
            <div className='text-center mb-1'>
                <p>
                    Contact Us: <strong>contacto@mail.com</strong>
                </p>
            </div>
            <div className='text-center '>
                <ul className='list-unstyled list-inline'>
                    <p className='list-inline-item'>Find Us:</p>
                    <li className='list-inline-item'>
                        <a href="link de la red social" className='text-dark' target="blank"><i className='fab fa-twitter'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="link de la red social" className='text-dark' target="blank"><i className='fab fa-linkedin-in'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="link de la red social" className='text-dark' target="blank"><i className='fab fa-facebook'></i></a>
                    </li>
                    <li className='list-inline-item'>
                        <a href="link de la red social" className='text-dark' target="blank"><i className='fab fa-google-plus'></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};