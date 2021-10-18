import React from 'react';
import './AllDoctorsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faMoneyBillAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';

const AllDoctorsSummery = (props) => {
    const {name, degree, gender, star, review, location, visit, img, id} = props.doctor;
    const history = useHistory();
    const handleDoctorClick = () => {
        history.push(`/doctor/${id}`)
    }
    return (
        <div className="all-doctors-summery-container">
            <div className="w-25">
                <img src={img} className="w-100" alt="" />
            </div>
            <div className="card-body w-50">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small><strong>{degree}</strong></small></p>
                <p className="card-text"><small><strong>Gender:</strong> {gender}</small></p>
                <p className="card-text"><small><FontAwesomeIcon className="text-warning" icon={faStar} />   {star} ({review} Total)</small></p>
            </div>
            <div className="w-25">
                <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} />   {location}</small></p>
                <p className="card-text"><small><FontAwesomeIcon icon={faMoneyBillAlt} />   {visit}</small></p>
                <button onClick={handleDoctorClick} className="btn btn-primary w-100 mb-2">View Profile</button>
                <Link to="/booking">
                    <button className="btn btn-primary w-100">Book Now</button> 
                </Link>      
            </div>
        </div>
    );
};

export default AllDoctorsSummery;