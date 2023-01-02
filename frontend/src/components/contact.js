import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
const Contact = () => {

    const history = useHistory();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c5rxd2q', 'template_rf0j7cs', form.current, 'lHNtuhN7OpvMcdTdV')
        .then((result) => {
            console.log(result.text);
            window.alert("Thankyou for your contacting us, we will get back to you!");
            history.replace("/contact")

        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <>


            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 col-offset-lg-1 contact-box'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img className='contact-image-class' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                            <div className='contact-content'>
                                
                                    Phone: +91 - 9876543212
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-offset-lg-1 contact-box'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img className='contact-image-class' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                            <div className='contact-content'>
                                
                                    Email: abcd@gmail.com
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-offset-lg-1 contact-box'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <img className='contact-image-class' src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                            <div className='contact-content'>
                                
                                    Address: Rajasthan, India
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">FullName</label>
                            <input type="text" className="form-control mt-2" id="exampleFormControlInput1" placeholder="enter your name" name="user_name"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" className="mt-4">Phone</label>
                            <input type="number" className="form-control mt-2" id="exampleFormControlInput1" placeholder="Your Contact Number" name="phone_number"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" className="mt-4">Email address</label>
                            <input type="email" className="form-control mt-2" id="exampleFormControlInput1" placeholder="name@example.com" name="user_email"/>
                        </div>

                        
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className="mt-4">Message</label>
                            <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                        </div>
                        <div className="col-md-12 mt-5">
                            <input className="btn btn-primary" type="submit" value="Send a Quote" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;