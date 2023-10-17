import React from 'react'

export const LogoComponent = ({ image }) => {
  return (
    <div className="col-md-12 col-lg-4 mt-2 text-centerr d-flex justify-content-center align-items-center my-3 pt-3">

      <img style={{ height: "80px", width: "80px", borderRadius: "10%" }} src={image} alt="" className="bg-black" />

    </div>
  )
}
