import React, { useState } from 'react';
import { UserForm } from "../forms/UserForm.jsx";
import { VetForm } from '../forms/ProfessionalForm.jsx';

export const SignUpComponent = () => {
    const [ logOption, setLogOption ] = useState( 'user' );
    return (
        <>
            <div className="container text-center">
                <button onClick={ () => setLogOption( 'user' ) }>As User</button>
                <button onClick={ () => setLogOption( 'professional' ) } >As Professional</button>
            </div>
            { logOption === 'professional' && <VetForm /> }
            { logOption === 'user' && <UserForm /> }

        </>
    );
};
