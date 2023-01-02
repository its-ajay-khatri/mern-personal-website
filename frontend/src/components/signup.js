import React, { useState } from 'react';
import '../App.css'
import { NavLink, useHistory } from 'react-router-dom';
const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work:"", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (event) => {
        //console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]: value});
    }

    const PostData = async (event) => {
        event.preventDefault();

        const { name, email, phone, work, password, cpassword} = user;


        /*----------------------------------Section--------------------------------------------------*/

        const res = await fetch("/register",{              // "/register"(POST) refers to auth.js file of server folder, means the code of the database insertion is written 
        //const res = await fetch("http://localhost:5000/register",{              // "/register"(POST) refers to auth.js file of server folder, means the code of the database insertion is written(no need to define proxy option in package.json file of client/frontent)
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({                //converting JSON to String
                name, email, phone, work, password, cpassword          //sending all the data fetched from user
            })
         });
        const data = await res.json();           //string to JSON

        /*----------------------------------COnclusion till this section--------------------------------------------------*/
     
        //earlier we were sending data using Postman as REST API, now in the above section we defined an header as json type
        //and sending this data converting into string, in postman, we were entering data manually and sending the POST request
        //in above block we arr sending the "user"(object) data instead of Postman ads POST resquest, then the /register code
        //is present in the auth.js file(server folder), then the data is stored in db as the execution code written in auth.js file in server folder

        if(res.status === 422){
            window.alert("Email already Exists!");
            console.log("Invalid Registration");
        }
        else if(res.status === 400){
            window.alert("Password and Confirm Password does not match!");
            console.log("Invalid Registration");
        }
        else if(res.status === 423 || !data){
            window.alert("Password to short!");
            console.log("Invalid Registration");
        }
        else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            history.push("/login");
        }
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Register</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-7 col-10 mx-auto">
                    <form method="POST" id="register-form">
                        <div class="form-group">
                            Your Name
                            <input type="text" className="form-control mt-2" id="name" name="name" value={user.name} onChange={handleInputs} placeholder="enter your name"/>
                        </div>
                        <div class="form-group">
                            Email address
                            <input type="email" className="form-control mt-2" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="enter name@example.com" />
                        </div>
                        <div class="form-group">
                            Phone
                            <input type="number" className="form-control mt-2" id="phone" name="phone" value={user.phone} onChange={handleInputs} placeholder="enter Your Contact Number" />
                        </div>
                        <div class="form-group">
                            Profession
                            <input type="text" className="form-control mt-2" id="work" name="work" value={user.work} onChange={handleInputs} placeholder="enter Your Profession" />
                        </div>
                        <div class="form-group">
                            Password
                            <input type="text" className="form-control mt-2" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="enter Your Password" />
                        </div>
                        <div class="form-group">
                            Confirm Password
                            <input type="text" className="form-control mt-2" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Conform Password" />
                        </div>
                        <div className="col-md-12 mt-5">
                            <input type="submit" name="signup" className='btn btn-primary' onClick={PostData} value="register"/>
                        </div>
                        </form>
                        Already have an Account? <NavLink to="/login">Sign In</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;