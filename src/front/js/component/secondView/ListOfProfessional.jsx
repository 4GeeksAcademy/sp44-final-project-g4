import React from "react";
import PropTypes from "prop-types";

export const ListOfProfessional = ({name, lastName, phoneNumber, }) => {
    return(
        <>
            <ul>
                <li>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-4">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid rounded-start" alt="profile picture" />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <ul>
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{lastName}</p>
                                        <p className="card-text">{phoneNumber}</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

ListOfProfessional.PropTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
    
}