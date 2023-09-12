import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const ProfessionalProfile = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="row p-3">
                <div className="col-3">
                    <p>Aqui puede ir otra cosa</p>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip01" className="form-label">Aqui es donde puedo ir algo mas</label>
                        <input type="text" className="form-control" id="validationTooltip01" value="Mark" required />
                        <div className="valid-tooltip">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <form className="row g-3 needs-validation">
                        <div className="col-md-4 position-relative">
                            <label for="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label for="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label for="email" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <input type="email" className="form-control" id="email" required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid email.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 position-relative">
                            <label for="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label for="companyName" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="companyName" />
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="avatar" className="form-label">Avatar</label>
                            <input type="file" className="form-control" id="avatar" aria-label="file example" required/>
                                <div className="invalid-feedback">Avatar</div>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" placeholder="Required description" required></textarea>
                            <div class="invalid-feedback">
                                Please enter a message in the description.
                            </div>
                        </div>
                        <div className="col-md-2 position-relative">
                            <label for="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" value="New York" required />
                        </div>
                        <div className="col-md-2 position-relative">
                            <label for="zipCode" className="form-label">Zip Code</label>
                            <input type="number" className="form-control" id="zipCode" required />
                        </div>
                        <div className="col-md-4 position-relative">
                            <label for="service" className="form-label">Service</label>
                            <input type="text" className="form-control" id="service" required />
                        </div>
                        <div className="col-md-2 position-relative">
                            <label for="priceLow" className="form-label">Price Low</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="priceLowSymbol">$</span>
                                <input type="number" className="form-control" id="priceLow" />
                            </div>
                        </div>
                        <div className="col-md-2 position-relative">
                            <label for="priceHigh" className="form-label">Price High</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="priceHighSymbol">$</span>
                                <input type="number" className="form-control" id="priceHigh" />
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Edit Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
