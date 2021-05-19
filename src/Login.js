import { Button } from '@material-ui/core';
import React from 'react';
import { auth,provider } from './Firebase';
import './Login.css';
function Login() {

    const signIn = () => {
        /* Smart Google Login */
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
        /* Popip in case that the operation was closed early or there was an error */
    };
    return (
         <div className='login'>
           <div className="login_Logo">
            <img
            src="https://i.imgur.com/vLpMsgy.png "class="center" 
            alt=""
            />
           </div>
           <Button onClick={signIn}>Sign In</Button>
        </div>
    );
 }

export default Login;
