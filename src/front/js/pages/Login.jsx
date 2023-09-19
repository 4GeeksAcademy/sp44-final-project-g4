import React, { useState } from 'react';
import { SignInComponent } from '../component/signIn/SignInComponent.jsx';
import { SignUpComponent } from '../component/signIn/SignUpComponent.jsx';
import { Navbar } from '../component/Navbar.jsx';

export const Login = () => {
    const [ logOption, setlogOption ] = useState( 'signin' );
    console.log( logOption );
    return (
        <>
            <Navbar />

            <div className="container text-center">
                {/* {logOption === "signup" && */ }
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={ () => setlogOption( 'signin' ) }>Signin</button>
                {/* {logOption === "signin" && */ }
                <button
                    className="btn btn-outline-primary m-1"
                    onClick={ () => setlogOption( 'signup' ) } >Signup</button>
            </div>
            { logOption === "signin" && <SignInComponent /> }
            { logOption === "signup" && <SignUpComponent /> }

        </>
    );
};
