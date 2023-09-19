import React from 'react';

export const ImageDisplayDropDown = ( { image } ) => {
    return (
        <>
            <div className="dropdown  text-end">
                <img style={ { height: "60px", width: "60px", borderRadius: "50%" } } src={ image } id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" alt="" className="p-1" />
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">View Profile</a></li>
                    <li><a className="dropdown-item" href="#">Favorites</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
                {/* <button type="button" className="btn btn-primary p-1 me-3 mt-3 mb-3">SignIn</button>
                <button type="button" className="btn btn-secondary p-1 me-3 mt-3 mb-3">SignUp</button> */}
            </div>


        </>
    );
};
