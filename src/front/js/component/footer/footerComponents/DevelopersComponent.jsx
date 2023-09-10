import React from 'react'


export const DevelopersComponent = () => {
    return (
        <div className='col-md-4 col-lg-4 col-xl-4 mt-2 text-center'>
            <h5 className='text-uppercase font-weight-bold text-center'>Developed By:</h5>
            <hr className='mb-2' />
            <div className='text-center'>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="" alt="" className="p-1" />
                    <a href="https://www.linkedin.com/in/yuliya-bundur/" className='text-dark mx-2'>Yuliya Bundur</a>
                    <a href="https://github.com/yuliyabundur"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="" alt="" className="p-1 bg-dark" />
                    <a href="https://www.linkedin.com/in/elhadjarroyo/" className='text-dark mx-2'>El Hadj Mbaye Mbengue Arroyo</a>
                    <a href="https://github.com/tuusuario"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="" alt="" className="p-1 bg-dark" />
                    <a href="https://www.linkedin.com/in/hector-padron-488288b0/" className='text-dark mx-2'>Hector Padron</a>
                    <a href="https://github.com/hectorpd"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="" alt="" className="p-1 bg-dark" />
                    <a href="https://www.linkedin.com/in/rodr%C3%ADguez-mu%C3%B1oz/" className='text-dark mx-2'>Daniel E. Rodriguez Munoz</a>
                    <a href="https://github.com/Romu9319"><i className="fab fa-github"></i></a>
                </p>
            </div>
        </div>
    )
}
