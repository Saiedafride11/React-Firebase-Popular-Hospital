import React from 'react';
import './AllDoctorsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faMoneyBillAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const AllDoctorsSummery = (props) => {
    const {name, degree, gender, star, review, location, visit, img, id} = props.doctor;
    const history = useHistory();
    const handleDoctorClick = () => {
        history.push(`/doctor/${id}`)
    }
    const handleBookClick = () => {
        history.push(`/booking/${id}`)
    }
    return (
        <div className="all-doctors-summery-container">
            <div className="">
                <img src={img} className="w-100" alt="" />
            </div>
            <div className="all-doctors-summery">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small><strong>{degree}</strong></small></p>
                <p className="card-text"><small><strong>Gender:</strong> {gender}</small></p>
                <p className="card-text"><small><FontAwesomeIcon className="text-warning" icon={faStar} />   {star} ({review} Total)</small></p>
                <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} />   {location}</small></p>
                <p className="card-text"><small><FontAwesomeIcon icon={faMoneyBillAlt} />   {visit}</small></p>
                <button onClick={handleDoctorClick} className="btn btn-primary w-100 mb-2">View Profile</button>
                <button onClick={handleBookClick} className="btn btn-primary w-100">Book Now</button>     
            </div>
        </div>
    );
};

export default AllDoctorsSummery;