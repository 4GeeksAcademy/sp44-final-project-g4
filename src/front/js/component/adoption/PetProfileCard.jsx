import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImage = "https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000";

export const PetProfileCard = ( { animal } ) => {


    const { name, breeds, age, description, photos, url } = animal;

    const replaceImage = ( error ) => {
        //replacement of broken Image
        error.target.src = placeholderImage;
    };

    return (
        <>
            <div className="container m-2">

                <div className="card m-3" style={ { width: "18rem" } }>

                    <img src={ typeof photos[ 0 ] == 'undefined' ? "https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" : photos[ 0 ].medium } className="card-img-top" alt="..." style={ { maxHeight: "20rem" } } />

                    <p className="btn">{ name }</p>
                    <div className="card-body">

                        <p className="card-text">{ description }</p>
                        <div >
                            <p >{ breeds.primary }</p>

                        </div>
                        <div >
                            <p className="btn " >{ breeds.primary }</p>

                        </div>
                        <div className="mt-2 m-1">
                            <a href={ url } target="blank" className="project-text-blue">Adopt This Animal</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
