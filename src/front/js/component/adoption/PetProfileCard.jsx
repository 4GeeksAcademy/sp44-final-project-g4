import React from 'react';
import { Link } from 'react-router-dom';


const placeholderImage = "https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000";

export const PetProfileCard = ( { animal } ) => {
    const { name, breeds, age, description, photos } = animal;

    const replaceImage = ( error ) => {
        //replacement of broken Image
        error.target.src = placeholderImage;
    };

    return (
        <>
            <div className="container project-light m-2">

                <div className="card m-3" style={ { width: "18rem" } }>

                    <img src={ typeof photos[ 0 ] == 'undefined' ? "https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000" : photos[ 0 ].medium } className="card-img-top" alt="..." style={ { maxHeight: "20rem" } } />

                    <button type="button" className="btn btn-outline-primary project-blue " disabled>{ name }</button>
                    <div className="card-body">

                        <p className="card-text">{ description }</p>
                        <div className="d-flex">
                            <button type="button" className="me-1 btn btn-outline-primary project-blue" disabled>{ breeds.primary }</button>
                            <button type="button" className="me-1 btn btn-outline-primary project-blue" disabled>{ age }</button>

                        </div>
                        <div className="mt-2">
                            <Link to="/petprofile" state={ animal }>More details</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
