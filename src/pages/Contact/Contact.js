import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
            <div className="container py-5">
                <h2 className="text-center py-1">Contact Us</h2>
                <form className="row g-3 p-5">
                    <div className="col-md-6">
                      <label htmlFor="fName" className="form-label">First Name</label>
                      <input type="text" placeholder="First Name..." className="form-control" id="fName"/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lName" className="form-label">Last Name</label>
                      <input type="text" placeholder="Last Name..." className="form-control" id="lName"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" placeholder="Email..." className="form-control" id="email"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" placeholder="Phone..." className="form-control" id="phone"/>
                    </div>
                    <div className="col-12">
                      <textarea className="w-100 p-2" style={{height:'100px'}} placeholder="Message...">

                      </textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                </form>

                <div className="contact-us text-center text-white p-3">
                    <div>
                        <h4>Address</h4>
                        <p>H3556 Beech Street, San Francisco, USA</p>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>+1 315 369 5943</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>hello@popularhospital.com</p>
                    </div>
                </div>
            </div>
    );
};

export default Contact;