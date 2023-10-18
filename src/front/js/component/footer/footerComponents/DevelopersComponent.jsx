import React from 'react'
import yuliya from "../../../../img/profilepicture/yuli.jpg"
import alayi from "../../../../img/profilepicture/alayi.jpg"
import hector from "../../../../img/profilepicture/Hector.jpg"
import daniel from "../../../../img/profilepicture/yoyo.jpg"


export const DevelopersComponent = () => {
    return (
        <div className='col-md-4 col-lg-4 col-xl-4 mt-1 text-center'>
            <h5 className='text-uppercase font-weight-bold text-center'>Developed By:</h5>
            <hr className='mb-1' />
            <div className='text-center'>
                
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src={yuliya} alt="" className="bg-dark"/>
                    <a href="https://www.linkedin.com/in/yuliya-bundur/" className='text-dark mx-2'>Yuliya Bundur</a>
                    <a href="https://github.com/yuliyabundur"><i className="fab fa-github"></i></a>
                </p>

                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src={alayi} alt="" className="bg-dark"/>
                    <a href="https://www.linkedin.com/in/elhadjarroyo/" className='text-dark mx-2'>El Hadj Mbaye Mbengue Arroyo</a>
                    <a href="https://github.com/tuusuario"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src={hector} alt="" className="bg-dark"/>
                    <a href="https://www.linkedin.com/in/hector-padron-488288b0/" className='text-dark mx-2'>Hector Padron</a>
                    <a href="https://github.com/hectorpd"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src={daniel} alt="" className="bg-dark"/>
                    <a href="https://www.linkedin.com/in/rodr%C3%ADguez-mu%C3%B1oz/" className='text-dark mx-2'>Daniel E. Rodriguez Munoz</a>
                    <a href="https://github.com/Romu9319"><i className="fab fa-github"></i></a>
                </p>
            </div>
        </div>
    )
}
