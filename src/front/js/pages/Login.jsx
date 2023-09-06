import React from 'react';
import { SignInComponent } from '../component/signIn/SignInComponent.jsx';
import { SignUpComponent } from '../component/signIn/SignUpComponent.jsx';

export const Login = () => {
    return (
        <>
            <SignInComponent />
            <SignUpComponent />
        </>
    );
};
