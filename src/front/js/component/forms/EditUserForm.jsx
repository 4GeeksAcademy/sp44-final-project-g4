import React, { useEffect, useState } from 'react';
import { useForm } from "../hooks/useForm.jsx";
import { signUp } from '../../helpers/signUp.js';
import { ImageUpload } from './ImageUpload.jsx';


export const EditUserForm = () => {
    const [ userImage, setUserImage ] = useState( '' );
    const { formState, onResetForm, onInputChange, name, email, password, last_name, avatar, location } = useForm( {
        name: '',
        last_name: '',
        email: '',
        password: ''
    } );


    const handleImage = ( url ) => {
        setUserImage( url );
        console.log( url );
    };


    const handleSubmit = async ( event ) => {

        event.preventDefault();
        console.log( 'working' );
        console.log( formState );
        await signUp( event, formState, "user", userImage )
            .then( data => {
                console.log( data );
                if ( data.code == 501 ) {

                    alert( data.message );
                }
                alert( data.message );

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
                        <ImageUpload getImageUrl={ handleImage } />
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
                        <div className="form-floating mb-2">
                            <input
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                minlength="8" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
        </>
    );
};
