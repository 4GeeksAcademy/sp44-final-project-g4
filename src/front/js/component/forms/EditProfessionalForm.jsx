import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from "../hooks/useForm.jsx";
import { signUp } from '../../helpers/signUp.js';
import { ImageUpload } from './ImageUpload.jsx';
import { useNavigate } from "react-router-dom";
import { updateProfessionalProfile } from '../../helpers/updateProfessionalProfile.js';


export const EditProfessionalForm = () => {
    const [ user, setuser ] = useState( JSON.parse( localStorage.getItem( "user" ) ) );
    const [ type, setType ] = useState( user.type );
    const navigate = useNavigate();


    const { formState, onResetForm, onInputChange, name, email, last_name, description, price_low, phone_number, address, zip_code, company_name, services, price_high } = useForm( {
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone,
        description: user.description,
        price_low: user.price_low,
        price_high: user.price_high,
        address: user.address,
        zip_code: user.zip_code,
        company_name: user.company,
        services: user.services
    } );



    const handleType = ( { target } ) => {
        setType( target.value );
    };


    const handleSubmit = async ( event ) => {
        event.preventDefault();

        const userType = type.toLowerCase().trim();
        updateProfessionalProfile( event, formState, userType, user.userId )
            .then( data => {
                // For development only.
                // alert( data.message );
                navigate( "/pro-profile" );
            } );
        return;
    };



    return (
        <>
            <div className="row p-3 container m-3">
                <h3>Professional Profile</h3>

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
