import React from 'react';
import './Clinic.css';
import img from '../../../images/clinic.png';

const Clinic = () => {
    const clinics = [
        {
            "img": "https://i.ibb.co/HBp72Zk/clinic-07.jpg",
            "title": "Covid Cabin"
        },
        {
            "img": "https://i.ibb.co/558zrpW/clinic-06.jpg",
            "title": "Fresh Cabin"
        },
        {
            "img": "https://i.ibb.co/47dR8b2/Ausnviro768.jpg",
            "title": "Fresh Bed"
        },
        {
            "img": "https://i.ibb.co/CvpsjgK/clinic-05.jpg",
            "title": "Laboratory"
        },
        {
            "img": "https://i.ibb.co/CQSnnQb/clinic-02.jpg",
            "title": "ICU"
        },
        {
            "img": "https://i.ibb.co/w0Hn9zc/clinic-01.jpg",
            "title": "Test Room"
        },
        {
            "img": "https://i.ibb.co/hWp8LL1/clinic-08.jpg",
            "title": "Medical"
        },
        {
            "img": "https://i.ibb.co/C5Wxj2L/clinic-04.jpg",
            "title": "Patient Ward"
        },
        {
            "img": "https://i.ibb.co/gTq42BX/clinic-09.jpg",
            "title": "Operation"
        }
    ]
    return (
        <div className="clinic-container">
            <div className="container">
                <div className="row">
                    <div className="clinic-size">
                        <div className="col-md-4 col-sm-12 col-12">
                            <h2>Available Features in Our Clinic</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <img src={img} className="w-75" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-12 col-12">
                            <div className="clinic">
                                {
                                    clinics?.map(clinic => <div key="clinic.img" className="text-center">
                                        <div className="clinic-inner">
                                            <div className="w-100">
                                                <img src={clinic.img} alt="" />
                                            </div>
                                            <h3>{clinic.title}</h3>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clinic;