import React from 'react';
import './Services.css';
import img from '../../../images/services.png'

const Services = () => {
    const services = [
        {   
            "id": "01",
            "img": "https://i.ibb.co/HBp72Zk/clinic-07.jpg",
            "title": "Covid Cabin"
        },
        {   
            "id": "02",
            "img": "https://i.ibb.co/558zrpW/clinic-06.jpg",
            "title": "Fresh Cabin"
        },
        {
            "id": "03",
            "img": "https://i.ibb.co/47dR8b2/Ausnviro768.jpg",
            "title": "Fresh Bed"
        },
        {
            "id": "04",
            "img": "https://i.ibb.co/CvpsjgK/clinic-05.jpg",
            "title": "Laboratory"
        },
        {
            "id": "05",
            "img": "https://i.ibb.co/CQSnnQb/clinic-02.jpg",
            "title": "ICU"
        },
        {
            "id": "06",
            "img": "https://i.ibb.co/w0Hn9zc/clinic-01.jpg",
            "title": "Test Room"
        },
        {
            "id": "07",
            "img": "https://i.ibb.co/hWp8LL1/clinic-08.jpg",
            "title": "Medical"
        },
        {
            "id": "08",
            "img": "https://i.ibb.co/C5Wxj2L/clinic-04.jpg",
            "title": "Patient Ward"
        },
        {
            "id": "09",
            "img": "https://i.ibb.co/gTq42BX/clinic-09.jpg",
            "title": "Operation"
        }
    ]
    return (
        <div className="services-container">
            <div className="container">
                <div className="row">
                    <div className="services-size">
                        <div className="col-md-4 col-sm-12 col-12">
                            <h2>Available Features in Our Services</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <img src={img} className="w-75" alt="" />
                        </div>
                        <div className="col-md-8 col-sm-12 col-12">
                            <div className="services">
                                {   
                                    services?.length === 0 ?
                                    <h2 style={{textAlign: 'center', color: '#1976d2', marginTop: '50px'}}>Loading...</h2>
                                    :
                                    services?.map(service => <div key={service.id} className="text-center">
                                        <div className="services-inner">
                                            <div className="w-100">
                                                <img src={service.img} alt="" />
                                            </div>
                                            <h3>{service.title}</h3>
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

export default Services;