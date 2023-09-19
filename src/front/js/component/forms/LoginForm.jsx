import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { signIn } from '../../helpers/signIn.js';
import { useForm } from "../hooks/useForm.jsx";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { store, actions } = useContext( Context );
    const { formState, onResetForm, onInputChange, email, password } = useForm( {
        email: '',
        password: ''
    } );
    const navigate = useNavigate();

    const handleSubmit = ( event ) => {
        event.preventDefault();
        signIn( event, formState )
            .then( data => {
                // For development only.
                if ( data.code === 501 ) {
                    alert( data.msg );
                } else {
                    store.loggedUser.push( data );
                    console.log( store.loggedUser );
                    navigate( "/" );

                }
            } );

    };

    useEffect( () => {

    }, [ store.loggedUser ] );


    return (
        <>

            <div className="container w-25 mt-5">
                <main className="form-signin">
                    <form onSubmit={ handleSubmit }>
                        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Sign In</h1>
                        <div className="form-floating mb-2">
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
                                placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
        </>
    );
};
