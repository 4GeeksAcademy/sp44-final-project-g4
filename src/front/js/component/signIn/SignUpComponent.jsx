import React, { useState } from 'react';
import { UserForm } from "../forms/UserForm.jsx";
import { VetForm } from '../forms/ProfessionalForm.jsx';
import { ProfessionalForm } from '../forms/ProfessionalRegistrationForm.jsx';
export const SignUpComponent = () => {
    const [ logOption, setLogOption ] = useState( 'user' );
    return (
        <>
            <div className="container text-center">
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={ () => setLogOption( 'user' ) }>As User</button>
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={ () => setLogOption( 'professional' ) } >As Professional</button>
            </div>
            { logOption === 'professional' && <ProfessionalForm /> }
            { logOption === 'user' && <UserForm /> }

        </>
    );
};
