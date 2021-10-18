import React from 'react';
import './Banner.css';
import img from '../../../images/doctor.png';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-inner">
                    <div className="d-flex align-items-center">
                        <div>
                            <h1>Search Doctor,</h1>
                            <h1>Make an Appointment</h1>
                            <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                            <div>
                                <input className="w-100 p-2 mb-2 rounded-3" type="text" placeholder="Search Location" />
                                <br />
                                <input className="w-100 p-2 mb-3 rounded-3" type="text" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                            </div>
                            <button className="btn btn-primary w-50">Make Appointment</button>
                        </div>
                    </div>
                    <div>
                        <img src={img} className="w-100" alt="" />
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Banner;