import React, { useEffect, useState } from 'react';
import { useForm } from "../hooks/useForm.jsx";
import { useNavigate } from "react-router-dom";
import { updateProfessionalProfile } from "../../helpers/updateProfessionalProfile.js";
import { ImageUpload } from './ImageUpload.jsx';


export const EditUserForm = () => {
    const [ user, setuser ] = useState( JSON.parse( localStorage.getItem( "user" ) ) );
    const [ userId, setUserId ] = useState( localStorage.getItem( "id" ) );
    const { formState, onResetForm, onInputChange, name, email, password, last_name, avatar, location } = useForm( {
        name: user.name,
        last_name: user.last_name,
        email: user.email
    } );
    const navigate = useNavigate();



    const handleSubmit = ( event ) => {

        event.preventDefault();

        updateProfessionalProfile( event, formState, "user", userId )
            .then( data => {
                console.log( data );
                if ( data.code == 501 ) {
                    alert( data.message );
                }
                console.log( 'navigating' );
                navigate( "/" );

                // setLoginRedirect(true);
            } );



    };


    return (
        <>
            {/* {loginRedirect && (
                <Navigate replace to="/login" />
            )} */}
            <div className="container w-50 ">

                <main className="form-signin">
                    <form onSubmit={ handleSubmit }>
                        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
                        <div className="form-floating mb-2">
                            <input
                                name="name"
                                value={ name }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Your Name"
                                minLength="3"
                                maxLength="20"
                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                name="last_name"
                                value={ last_name }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Optional"
                                minLength="3"
                                maxLength="20" />
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="email"
                                value={ email }
                                onChange={ onInputChange }
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>

                        </div>


                        <button className="w-100 btn btn-lg btn-primary" type="submit">Save Profile</button>
                    </form>
                </main>
            </div>
        </>
    );
};
