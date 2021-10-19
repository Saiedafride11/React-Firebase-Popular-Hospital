import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTablets, faVials } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Features = () => {
    const features = [
        {   
            "id": "01",
            "title": "Visit a Doctor",
            "description": "We hire the best specialists to deliver top-notch diagnostic services for you.",
            icon: faBed,
            "path": "/doctors"
        },
        {   
            "id": "02",
            "title": "Find a Pharmacy",
            "description": "We provide the a wide range of medical services, so every person could have the opportunity.",
            icon: faTablets,
            "path": "/services"
        },
        {
            "id": "03",
            "title": "Find a Lab",
            "description": "We use the first-class medical equipment for timely diagnostics of various diseases.",
            icon: faVials,
            "path": "/services"
        },
    ]
    return (
        <div className="py-5">
            <div className="container">
                <h2 className="text-center py-2" style={{color: '#1976d2'}}>Features</h2>
                <div className="features-section">
                    {
                        features?.map(feature => <div className="features-inner" key={feature.id}>
                            <span><FontAwesomeIcon icon={feature.icon} style={{color: '#1976d2'}}/></span>
                            <div className="card-body">
                                <h5 className="card-title">{feature.title}</h5>
                                <p className="card-text">{feature.description}</p>
                                <Link to={`${feature.path}`} className="text-decoration-underline" style={{color: '#1976d2'}}>
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Features;