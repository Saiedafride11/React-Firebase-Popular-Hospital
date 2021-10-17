import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTablets, faVials } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    const features = [
        {
            "title": "Visit a Doctor",
            "description": "We hire the best specialists to deliver top-notch diagnostic services for you.",
            "icon": "faBed"
        },
        {
            "title": "Find a Pharmacy",
            "description": "We provide the a wide range of medical services, so every person could have the opportunity.",
            "icon": "faTablets"
        },
        {
            "title": "Find a Lab",
            "description": "We use the first-class medical equipment for timely diagnostics of various diseases.",
            "icon": "faVials"
        },
    ]


    return (
        <div className=" py-5">
            <div className="container">
                <h2 className="text-center py-2">Features</h2>
                <div className="features-section">
                    {
                        features?.map(feature => <div className="features-inner">
                        <span><FontAwesomeIcon icon={faBed || faVials}/></span>
                        <div className="card-body">
                            <h5 className="card-title">{feature.title}</h5>
                            <p className="card-text">{feature.description}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Features;