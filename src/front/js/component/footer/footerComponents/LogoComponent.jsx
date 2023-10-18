import React from 'react';
import mainLogo from '/workspaces/sp44-final-project-g4/src/front/img/logo-web.png';

export const LogoComponent = ({ image }) => {
    return (
        <div className="col-md-12 mt-2 text-center">

            <img src={mainLogo} alt="" style={{ width: "100px", height: "80px", marginTop: "15px", marginBottom: "15px", marginLeft: "10px" }} />

            <div className='text-center mb-3'>
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
    )
}
