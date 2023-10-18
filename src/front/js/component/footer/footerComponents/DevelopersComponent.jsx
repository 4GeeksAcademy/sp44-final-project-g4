import React from 'react'


export const DevelopersComponent = ({ image }) => {
    return (
        <div className='col-md-12 mt-2 text-center'>
            <p className='text-uppercase font-weight-bold text-center'><strong>Developed By:</strong></p>
            <hr className='mb-1' />
            <div className='text-center'>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/C4D03AQGAE-HXdKCg4Q/profile-displayphoto-shrink_800_800/0/1629458121970?e=1703116800&v=beta&t=meciEt4AwCU1pQZ0dWDcdn4U9OOQNpGnwYuL_ufHXAw" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/yuliya-bundur/" className='small-text mx-2'>Yuliya Bundur</a>
                    <a href="https://github.com/yuliyabundur"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/C4D03AQFb1Q3j5V_ddw/profile-displayphoto-shrink_800_800/0/1661499734474?e=1701907200&v=beta&t=qGzzL6l_UX6cjhr2uBFkar5ETJIp9nIH9dl1RNBLAnE" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/elhadjarroyo/" className='small-text mx-2'>El Hadj Mbaye Mbengue Arroyo</a>
                    <a href="https://github.com/tuusuario"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_200_200/0/1660002666757?e=1698184800&v=beta&t=m5oMfSU3QqxGgEU4mSA_56fs-vlbBIc5YucSKfD2rVg" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/hector-padron-488288b0/" className='small-text mx-2'>Hector Padron</a>
                    <a href="https://github.com/hectorpd"><i className="fab fa-github"></i></a>
                </p>
                <p>
                    <img style={{ height: "35px", width: "35px", borderRadius: "50%" }} src="https://media.licdn.com/dms/image/C4E03AQG7K8scEUuPuw/profile-displayphoto-shrink_800_800/0/1612887819025?e=1701907200&v=beta&t=T8dE2BISsdWk47ayfcWQxc5moon0ulwwUyNxkOcnaFg" alt="" className="bg-dark" />
                    <a href="https://www.linkedin.com/in/rodr%C3%ADguez-mu%C3%B1oz/" className='small-text mx-2'>Daniel E. Rodriguez Munoz</a>
                    <a href="https://github.com/Romu9319"><i className="fab fa-github"></i></a>
                </p>
            </div>
        </div>
    )
}
