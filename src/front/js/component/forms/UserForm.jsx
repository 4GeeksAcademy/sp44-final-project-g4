import React, { useEffect, useState } from 'react';
import { useForm } from "../hooks/useForm.jsx";
import { signUp } from '../../helpers/signUp.js';


export const UserForm = () => {
    const [ emailError, setEmailError ] = useState( '' );

    const { formState, onResetForm, onInputChange, name, email, password, last_name, avatar, location } = useForm( {
        name: '',
        last_name: '',
        email: '',
        password: ''
    } );



    const handleSubmit = async ( event ) => {
        event.preventDefault();
        console.log( 'working' );
        console.log( formState );
        signUp( event, formState, "user" )
            .then( data => {
                console.log( data );
                if ( data.status == 501 ) {
                    setEmailError( data.error + " " + data.message );
                    alert( data.error + " " + data.message );
                }
            } );

    };


    return (
        <>
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
                            <p className="text-danger">{ emailError }</p>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        {/* <div className="form-floating">
                            <input
                                name="location"
                                value={ location }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Location" />
                            <label htmlFor="floatingPassword">Location</label>
                        </div> */}
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
        </>
    );
};
