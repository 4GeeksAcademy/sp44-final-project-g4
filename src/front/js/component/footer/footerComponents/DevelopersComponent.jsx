import React from 'react'


export const DevelopersComponent = ({ image }) => {
    return (
        <div className='col-md-4 col-lg-4 col-xl-4 mt-1 text-center'>
            <h5 className='text-uppercase font-weight-bold text-center'>Developed By:</h5>
            <hr className='mb-1' />
            <div className='text-center'>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/D4E35AQF7RVyuk08G6A/profile-framedphoto-shrink_800_800/0/1692560031478?e=1697126400&v=beta&t=tpkMfqwmP3Bx8otQ7lq-kttdK4t52hcPdvibd56-lr8" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/yuliya-bundur/" className='text-dark mx-2'>Yuliya Bundur</a>
                    <a href="https://github.com/yuliyabundur"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/C4D03AQFb1Q3j5V_ddw/profile-displayphoto-shrink_800_800/0/1661499734474?e=1701907200&v=beta&t=qGzzL6l_UX6cjhr2uBFkar5ETJIp9nIH9dl1RNBLAnE" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/elhadjarroyo/" className='text-dark mx-2'>El Hadj Mbaye Mbengue Arroyo</a>
                    <a href="https://github.com/tuusuario"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src={image} alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/hector-padron-488288b0/" className='text-dark mx-2'>Hector Padron</a>
                    <a href="https://github.com/hectorpd"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/C4E03AQG7K8scEUuPuw/profile-displayphoto-shrink_800_800/0/1612887819025?e=1701907200&v=beta&t=T8dE2BISsdWk47ayfcWQxc5moon0ulwwUyNxkOcnaFg" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/rodr%C3%ADguez-mu%C3%B1oz/" className='text-dark mx-2'>Daniel E. Rodriguez Munoz</a>
                    <a href="https://github.com/Romu9319"><i className="fab fa-github"></i></a>
                </p>
            </div>
        </div>
    )
}
