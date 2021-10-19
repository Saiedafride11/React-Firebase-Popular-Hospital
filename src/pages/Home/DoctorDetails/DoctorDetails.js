import React, { useEffect, useState } from 'react';
import './DoctorDetails.css';
import { useHistory, useParams } from 'react-router';
import useData from '../../../hooks/useData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faStar, faThumbsUp, faDotCircle} from '@fortawesome/free-solid-svg-icons'

const DoctorDetails = () => {
    const {doctorId} = useParams();
    const [doctors] = useData();
    const [carts, setCart] = useState();
    const history = useHistory();

    useEffect(() => {
      const newDoctors = doctors?.filter((doctor) => doctor.id === doctorId);
      setCart(newDoctors);
    }, [doctors]);

    const handleBookClick = () => {
        history.push(`/booking/${doctorId}`)
    }
    return (
        <div className="container py-5">
            {   
                carts?.length === 0 ?
                <h2 style={{textAlign: 'center', color: '#1976d2', marginTop: '50px'}}>Loading...</h2>
                :
                carts?.map(cart => <div key={cart.id}>
                    <div className="doctor-details">
                        <div>
                            <img src={cart.img} className="w-100" alt="" />
                        </div>
                        <div className="m-5">
                            <h6><small><strong>{cart.degree}</strong></small></h6>
                            <h6><FontAwesomeIcon icon={faUserMd} /> {cart.title}</h6>
                            <p className="card-text"><strong>Gender: </strong>{cart.gender}</p>
                            <p className="card-text"><FontAwesomeIcon className="text-warning" icon={faStar} />   {cart.star} ({cart.review} Total)</p>
                            <p className="card-text"><strong><FontAwesomeIcon icon={faThumbsUp} /> </strong>{cart.like}</p>
                            <p className="card-text"><strong>Location: </strong>{cart.location}</p>
                            <p className="card-text"><strong>Visit: </strong>{cart.visit}</p>
                            <small className="text-muted"><FontAwesomeIcon icon={faDotCircle} className="text-success"/>  {cart.active}</small>
                            <button onClick={handleBookClick} className="btn btn-primary w-100 mt-2">Book Now</button> 
                        </div>
                     </div>
                     <div className="my-4">
                        <h6>{cart.about}</h6>
                        <p className="card-text">{cart.abourDes}</p>
                     </div>
                     <div className="my-4">
                        <h6>{cart.education}</h6>
                        <p className="card-text">{cart.educationDes}</p>
                     </div>
                     <div className="my-4">
                        <h6>{cart.works}</h6>
                        <p className="card-text">{cart.worksDes}</p>
                     </div>
                     <div className="my-4">
                        <h6>{cart.awards}</h6>
                        <p className="card-text">{cart.awardsDes}</p>
                     </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDetails;