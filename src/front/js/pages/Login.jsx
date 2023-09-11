import React, { useState } from 'react';
import { SignInComponent } from '../component/signIn/SignInComponent.jsx';
import { SignUpComponent } from '../component/signIn/SignUpComponent.jsx';

export const Login = () => {
    const [logOption, setlogOption] = useState('signin');
    console.log(logOption);
    return (
        <>

            <div className="container text-center">
                {/* {logOption === "signup" && */}
                <button onClick={() => setlogOption('signin')}>Signin</button>
                {/* {logOption === "signin" && */}
                <button onClick={() => setlogOption('signup')} >Signup</button>
            </div>
            {logOption === "signin" && <SignInComponent />}
            {logOption === "signup" && <SignUpComponent />}

        </>
    );
};
