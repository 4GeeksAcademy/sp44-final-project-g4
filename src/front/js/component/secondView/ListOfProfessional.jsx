import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import PropTypes from "prop-types";

export const ListOfProfessional = () => {
    const { store, actions } = useContext(Context);
    const [professionals, setProfessionals] = useState([]);
    // const [vets, setVets] = useState([]);
    // const [groomer, setGroomers] = useState([]);
    // const [walker, setWalkers] = useState([]);

    useEffect(() => {
        // Fetch and set professionals data from your local storage or API here
        const fetchData = async () => {
            try {
                const response = await fetch("/https://reimagined-journey-x7pq5jx4jjq2pvww-3001.app.github.dev//professionals/vet"); // Adjust the API endpoint accordingly
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProfessionals(data.results);
            } catch (error) {
                console.error("Error fetching professionals:", error);
            }
        };

        fetchData();
    }, []);

    
    const handleOnErrorImg = (e) => {e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"};

    return (
        <>
            <ul>
                {professionals.map((professional) => (
                    <li key={professional.id}>
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-4">
                                    <img src="src={professional.avatar}"
                                        className="img-fluid rounded-start" alt="profile picture"
                                        onError={handleOnErrorImg} />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <ul>
                                            <h5 className="card-title">{professional.name}</h5>
                                            <p className="card-text">{professional.lastName}</p>
                                            <p className="card-text">{professional.phoneNumber}</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

ListOfProfessional.propTypes = {
    // name: PropTypes.string.isRequired,
    // lastName: PropTypes.string.isRequired,
    // phoneNumber: PropTypes.string.isRequired
    
}