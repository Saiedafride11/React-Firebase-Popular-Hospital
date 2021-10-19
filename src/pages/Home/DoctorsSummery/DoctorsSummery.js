import React from 'react';
import './DoctorsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMoneyBillAlt, faMapMarkerAlt, faDotCircle} from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory} from 'react-router-dom';

const DoctorsSummery = (props) => {
    const {name, degree, star, review, location, visit, active, img, id} = props.doctor;
    const history = useHistory();

    const handleDoctorClick = () => {
        history.push(`/doctor/${id}`)
    }
    const handleBookClick = () => {
        history.push(`/booking/${id}`)
    }
    return (
        <div className="row row-cols-1 g-4 p-2">
            <div className="col doctor-summery">
                <div className="card h-100">
                    <img src={img} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><small><strong>{degree}</strong></small></p>
                        <p className="card-text"><small><FontAwesomeIcon className="text-warning" icon={faStar} />   {star} ({review} Total)</small></p>
                        <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} />   {location}</small></p>
                        <p className="card-text"><small><FontAwesomeIcon icon={faMoneyBillAlt} />   {visit}</small></p>
                    </div>

                    <div className="card-footer text-center">
                        <small className="text-muted"><FontAwesomeIcon icon={faDotCircle} className="text-success"/>  {active}</small>
                    </div>
                    <div className="hover-box">
                    <ul>
                        <li><button onClick={handleDoctorClick} className="btn btn-primary w-100 mb-2">View Profile</button></li>
                        <li><button onClick={handleBookClick} className="btn btn-primary w-100">Book Now</button></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsSummery;