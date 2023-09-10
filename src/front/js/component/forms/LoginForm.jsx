import React from 'react'
import { signIn } from '../../helpers/signIn.js';
import { useForm } from "../hooks/useForm.jsx";

export const LoginForm = () => {
    const { formState, onResetForm, onInputChange, email, password } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(event, formState)
            .then(data => {
                // For development only.
                if (data.code === 501) {
                    alert(data.msg)
                } else {
                    alert(data["access_token"])
                }
            })
    }

    return (
        <>
            <div className="container w-25 mt-5">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Sign In</h1>
                        <div className="form-floating mb-2">
                            <input
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                name="password"
                                value={password}
                                onChange={onInputChange}
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
    )
}
