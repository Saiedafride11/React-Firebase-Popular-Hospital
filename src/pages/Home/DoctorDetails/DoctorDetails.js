import React, { useEffect, useState } from 'react';
import './DoctorDetails.css';
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faStar, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const DoctorDetails = () => {
    const {doctorId} = useParams();
    const [doctors] = useData();
    const [carts, setCart] = useState();

    useEffect(() => {
      const newDoctors = doctors?.filter((doctor) => doctor.id === doctorId);
      setCart(newDoctors);
    }, [doctors]);
    return (
        <div className="container">
            {
                carts?.map(cart => <div key={cart.id}>
                    <div className="doctor-details">
                        <div className="w-25">
                            <img src={cart.img} className="w-100" alt="" />
                        </div>
                        <div className="mx-5">
                            <h6><strong>{cart.degree}</strong></h6>
                            <h6><FontAwesomeIcon icon={faUserMd} /> {cart.title}</h6>
                            <p><strong>Gender: </strong>{cart.gender}</p>
                            <p><FontAwesomeIcon className="text-warning" icon={faStar} />   {cart.star} ({cart.review} Total)</p>
                        </div>
                        <div>
                            <p><strong><FontAwesomeIcon icon={faThumbsUp} /> </strong>{cart.like}</p>
                            <p><strong>Location: </strong>{cart.location}</p>
                            <p><strong>Visit: </strong>{cart.visit}</p>
                            <Link to="/booking">
                                <button className="btn btn-primary w-100">Book Now</button> 
                            </Link> 
                        </div>
                     </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDetails;