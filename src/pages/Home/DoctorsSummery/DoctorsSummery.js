import React from 'react';
import './DoctorsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faMoneyBillAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const DoctorsSummery = (props) => {
    const {name, title, star, review, location, visit, img} = props.doctor;
    return (
        <div>
            <div className="row row-cols-1 g-4 p-2">
                <div className="col doctor-summery">
                    <div className="card h-100">
                        <img src={img} className="card-img-top w-100" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small><strong>{title}</strong></small></p>
                            <p className="card-text"><small><FontAwesomeIcon className="text-warning" icon={faStar} />   {star} ({review} Total)</small></p>
                            <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} />   {location}</small></p>
                            <p className="card-text"><small><FontAwesomeIcon icon={faMoneyBillAlt} />   {visit}</small></p>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                        <div className="hover-box">
                        <ul>
                            <li><button className="btn btn-primary w-100 mb-2">View Profile</button></li>
                            <li><button className="btn btn-primary w-100">Book Now</button></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsSummery;