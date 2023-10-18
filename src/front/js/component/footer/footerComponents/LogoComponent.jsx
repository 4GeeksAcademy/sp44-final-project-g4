import React from 'react'

export const LogoComponent = ({ image }) => {
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 mt-1 text-center align-items-center my-3 pt-3">

        <div className='text-center mb-3'>
        <img style={{ height: "80px", width: "80px", borderRadius: "10%" }} src={image} alt="" className="bg-black" />
        </div>         

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
