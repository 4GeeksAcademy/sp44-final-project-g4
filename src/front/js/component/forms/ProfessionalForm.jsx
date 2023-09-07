import React, { useEffect, useState } from 'react';
import { useForm } from "../hooks/useForm.jsx";
import { signUp } from '../../helpers/signUp.js';


export const VetForm = () => {
    const [ type, setType ] = useState( '' );
    const { formState, onResetForm, onInputChange, name, email, password, last_name, avatar, description, price_low, phone_number, address, zip_code, company_name, services } = useForm( {
        name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        description: '',
        avatar: '',
        price_low: '',
        address: '',
        zip_code: '',
        company_name: '',
        services: ''
    } );

    const handleType = ( { target } ) => {
        setType( target.value );
    };


    const handleSubmit = async ( event ) => {
        event.preventDefault();

        const userType = type.toLowerCase().trim();
        signUp( event, formState, userType )
            .then( data => {
                alert( data.message );
            } );
        return;
    };


    return (
        <>
            <div className="container w-50 ">


                <main className="form-signin">
                    <form onSubmit={ handleSubmit }>
                        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Proffessional Sign Up</h1>
                        { type }
                        <div className="form-floating">
                            <input
                                name="professional-type"
                                value={ type }
                                onChange={ handleType }
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                minLength="3"
                                maxLength="20"
                                required

                            />
                            <label htmlFor="floatingInput">Vet, Walker,Groomer?</label>
                        </div>
                        <div className="form-floating">
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
                                required

                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="last_name"
                                value={ last_name }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Optional"
                                minLength="3"
                                maxLength="20"
                                required
                            />
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
                                placeholder="name@example.com"
                                required
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                minLength="8"
                                required
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="phone_number"
                                value={ phone_number }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Phone Number"
                                required
                            />
                            <label htmlFor="floatingPassword">Phone Number</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="description"
                                value={ description }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Your description"
                                required
                            />
                            <label htmlFor="floatingPassword">Description</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="services"
                                value={ services }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Services"
                                required
                            />
                            <label htmlFor="floatingPassword">Services</label>
                        </div>
                        <div className="form-floating">
                            <input
                                name="company_name"
                                value={ company_name }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Company Name"
                                required
                            />
                            <label htmlFor="floatingPassword">Company Name</label>
                        </div>
                        <div className="form-floating">
                            <h4>Address</h4>
                            <h6>Let users find you!!</h6>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    name="address"
                                    value={ address }
                                    onChange={ onInputChange }
                                    className="form-control"
                                    placeholder="addressname"
                                    aria-label="address"
                                    minLength="5"
                                    required />
                                <span className="input-group-text">, New York, NY </span>
                                <input
                                    type="number"
                                    name="zip_code"
                                    value={ zip_code }
                                    onChange={ onInputChange }
                                    className="form-control"
                                    placeholder="Zip Code"
                                    aria-label="address"
                                    min="100"
                                    required />
                                <span className="input-group-text">USA</span>

                            </div>
                        </div>
                        <div className="form-floating">
                            <input
                                name="price_low"
                                value={ price_low }
                                onChange={ onInputChange }
                                type="number"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                required
                            />
                            <label htmlFor="floatingPassword">Price from...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <div className="m-1 d-flex flex-column ">
                                <label className="mb-2 bg-light p-2 rounded" htmlFor="floatingPassword">Profile Picture</label>

                                <input
                                    name="avatar"
                                    value={ avatar }
                                    onChange={ onInputChange }
                                    type="text"
                                    id="floatingPassword"
                                />
                            </div>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>
            </div>
        </>
    );
};
