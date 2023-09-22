
import React, { useEffect, useState } from 'react';
import { PetProfileCard } from "../component/adoption/PetProfileCard.jsx";
import { getPetToken } from "../helpers/getPetToken.js";
import { getAnimals } from "../helpers/getAnimals.js";
import { Link } from 'react-router-dom';
import { Navbar } from '../component/Navbar.jsx';
import { WaitingSpinner } from "../component/WaitingSpinner.jsx";
export const AdoptionView = () => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ animals, setAnimals ] = useState( null );


    const getTokenAndAnimals = async () => {
        setIsLoading( true );
        const token = await getPetToken();
        const animals = await getAnimals( token );
        setAnimals( animals.animals );
        console.log( animals.animals );
        setIsLoading( false );
    };

    useEffect( () => {

        getTokenAndAnimals();

    }, [] );


    return (
        <>
            <Navbar />
            { isLoading && <div className="container text-center">
                <img className="card-img-top" style={ { width: "18rem" } } src="https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" alt="" />
                <h4>Loading pets...</h4>
                <WaitingSpinner />
            </div> }

            <ul className="d-flex flex-wrap justify-content-center">

                { animals !== null && animals.map( animal => (

                    <li key={ animal.id } className="m-3">
                        <PetProfileCard
                            animal={ animal }
                        />
                    </li>
                ) ) }
            </ul>



        </>
    );
};
