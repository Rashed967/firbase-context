import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import app from './firebase/firebase.config';
import { AuthContex } from './providers/AuthProviders';

const Login = () => {
    const {user, signInUser} = useContext(AuthContex)
    console.log(signInUser)




    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please, Login</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                        <Link to="/register">
                        <button className="btn btn-active btn-link">New to auth?</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;