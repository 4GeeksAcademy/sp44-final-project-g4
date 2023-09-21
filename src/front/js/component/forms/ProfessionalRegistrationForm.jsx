import React, { useEffect, useState } from 'react';
import { useForm } from "../hooks/useForm.jsx";
import { signUp } from '../../helpers/signUp.js';
import { ImageUpload } from './ImageUpload.jsx';
import { Navigate } from "react-router-dom";

export const ProfessionalForm = () => {
    const [ type, setType ] = useState( '' );
    const [ isDone, setIsDone ] = useState( false );
    const [ userImage, setUserImage ] = useState( '' );
    const { formState, onResetForm, onInputChange, name, email, password, last_name, description, price_low, phone_number, address, zip_code, company_name, services, price_high } = useForm( {
        name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        description: '',
        price_low: '',
        price_high: '',
        address: '',
        zip_code: '',
        company_name: '',
        services: ''
    } );



    const handleImage = ( url ) => {
        setUserImage( url );
        console.log( url );
    };

    const handleType = ( { target } ) => {
        setType( target.value );
    };


    const handleSubmit = async ( event ) => {
        event.preventDefault();

        const userType = type.toLowerCase().trim();
        signUp( event, formState, userType, userImage )
            .then( data => {
                setIsDone( true );

            } );

        return;
    };



    return (
        <>
            { isDone && (
                <Navigate to="/" replace={ true } />
            ) }
            <div className="row p-3 container m-3">
                <h3>Professional Profile</h3>
                <h6 className="text-success">In order to signup you need to offer 10% off to customer on your services. In exchange, we will advertise your profile 100% free of charge!</h6>
                <ImageUpload getImageUrl={ handleImage } />
                <div className="form-floating mb-2">
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
                <div className="col-9">
                    <form className="row g-3 needs-validation" onSubmit={ handleSubmit }>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input
                                name="name"
                                value={ name }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="firstName"
                                required />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input
                                name="last_name"
                                value={ last_name }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="lastName" />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <input
                                    name="email"
                                    value={ email }
                                    onChange={ onInputChange }
                                    type="email"
                                    className="form-control"
                                    id="email" required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid email.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="email" className="form-label">Password</label>
                            <div className="input-group has-validation">
                                <input
                                    name="password"
                                    value={ password }
                                    onChange={ onInputChange }
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    minlength="8"
                                    required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid email.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 position-relative">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                name="phone_number"
                                value={ phone_number }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                required />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="companyName" className="form-label">Company Name</label>
                            <input
                                type="text"
                                name="company_name"
                                value={ company_name }
                                onChange={ onInputChange }
                                className="form-control"
                                id="companyName" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                name="description"
                                value={ description }
                                onChange={ onInputChange }
                                className="form-control"
                                id="description"
                                placeholder="Tell something about your services..."
                                required></textarea>
                            <div className="invalid-feedback">
                                Tell something about your services...
                            </div>
                        </div>
                        <div className="col-md-2 position-relative">
                            <label htmlFor="city" className="form-label">Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={ address }
                                onChange={ onInputChange }
                                className="form-control"
                                id="address"
                                required />
                        </div>
                        <div className="col-md-2 position-relative">
                            <label htmlFor="zipCode" className="form-label">Zip Code</label>
                            <input
                                type="number"
                                name="zip_code"
                                value={ zip_code }
                                onChange={ onInputChange }
                                className="form-control"
                                id="zipCode"
                                required />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="service" className="form-label">Services</label>
                            <input
                                name="services"
                                value={ services }
                                onChange={ onInputChange }
                                type="text"
                                className="form-control"
                                id="service"
                                required />
                        </div>
                        <div className="col-md-2 position-relative">
                            <label htmlFor="priceLow" className="form-label">Price Low</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="priceLowSymbol">$</span>
                                <input
                                    name="price_low"
                                    value={ price_low }
                                    onChange={ onInputChange }
                                    type="number"
                                    className="form-control"
                                    id="priceLow"
                                    required />
                            </div>
                        </div>
                        <div className="col-md-2 position-relative">
                            <label htmlFor="priceLow" className="form-label">Price Low</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="priceLowSymbol">$</span>
                                <input
                                    name="price_high"
                                    value={ price_high }
                                    onChange={ onInputChange }
                                    type="number"
                                    className="form-control"
                                    id="priceHigh"
                                    required />
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Save Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
