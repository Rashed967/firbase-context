import React, { useContext } from 'react';
import { AuthContex } from './providers/AuthProviders';


const Home = () => {
    const {user} = useContext(AuthContex)
    console.log(user)

    return (
        <div>
            <h2>Home page </h2>
            <p>{user && user.fullName}</p>
        </div>
    );
};

export default Home;