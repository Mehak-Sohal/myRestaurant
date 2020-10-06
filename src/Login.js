import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { auth } from './firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch(error => alert(error.message));

    };

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    };
 
    return (
        <div className='login'>
            <div className='login-container'>
                <h3>Sign In</h3>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login-signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing in you agree to the conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button className='login-registerButton' onClick={register}>Create your Account</button>
            </div>   
        </div>
    )
}

export default Login
