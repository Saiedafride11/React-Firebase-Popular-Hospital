import React from 'react';
import './Banner.css';
import img from '../../../images/doctor.png';

const Banner = () => {
    return (
        <div className="banner" id="home">
            <div className="container">
                <div className="banner-inner">
                    <div>
                        <div>
                            <h1 className="text-dark">Search Doctor,</h1>
                            <h1 style={{color: '#1976d2'}}>Make an Appointment</h1>
                            <p className="text-muted">Discover the best doctors, clinic & hospital the city nearest to you.</p>
                            <div>
                                <input className="w-100 p-2 mb-2 rounded-3" type="text" placeholder="Search Location" />
                                <br />
                                <input className="w-100 p-2 mb-3 rounded-3" type="text" placeholder="Search Doctors, Clinics, Medicine, Diseases Etc" />
                            </div>
                            <button className="btn btn-primary">Make Appointment</button>
                        </div>
                    </div>
                    <div className="banner-right">
                        <img src={img} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;