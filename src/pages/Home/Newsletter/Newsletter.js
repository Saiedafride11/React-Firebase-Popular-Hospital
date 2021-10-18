import React from 'react';
import './Newsletter.css'
import img from '../../../images/newsletter.png';

const Newsletter = () => {
    return (
        <div style={{backgroundColor: "#E5F1FB", padding: "40px 0px", width: "100%"}}>
            <div className="container">
                <div className="newsletter">
                    <div>
                        <h2>Grab Our Newsletter</h2>
                        <p className="text-muted">To receive latest offers and discounts from the shop.</p>
                        <form className="row g-3">
                            <div className="col-auto">
                                <input type="email" className="form-control" placeholder="Enter Your Email Address"/>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;