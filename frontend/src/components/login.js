import React, { useContext, useState } from 'react';
import '../App.css'
import { NavLink, useHistory } from 'react-router-dom';

import { UserContext } from '../App';

const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChanger = (event) => {
        setEmail(event.target.value);
    }

    const passwordChanger = (event) => {
        setPassword(event.target.value);
    }

    const loginUser = async (event) => {
        event.preventDefault();

        const res = await fetch('/signin', {        //prefer signup for documentation
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();

        if(res.status === 400 || !data){
            console.log("Invalid Credentials or User Does Not Exist");
            window.alert("Invalid Credentials or User Does Not Exist");
        }
        else{
            dispatch({type: "USER", payload: true});                   //dispatch called
            const token = localStorage.setItem('token', data.user);
            console.log(token);
            console.log("Logged In Successfully!");
            history.push("/about");
        }
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Login</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-7 col-10 mx-auto">
                    <form method='POST'> 
                        <div class="form-group">
                            Email address
                            <input type="email" className="form-control mt-2" id="email" value={email} onChange={emailChanger} name="email" placeholder="enter name@example.com" />
                         </div>
                        <div class="form-group">
                            Password
                            <input type="text" className="form-control mt-2" id="password" value={password} onChange={passwordChanger} name="password" placeholder="enter Your Password" />
                        </div>   
                        <div className="col-md-12 mt-5">
                            <input type="submit" name="signin" id="signin" onClick={loginUser} className='btn btn-primary' value="Log In"/>
                        </div>
                        </form>
                        Don't have an Account? <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;