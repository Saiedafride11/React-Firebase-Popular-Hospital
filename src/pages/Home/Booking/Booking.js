import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useHistory, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faStar, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import useData from '../../../hooks/useData';

const Booking = () => {
    const {bookingId} = useParams();
    const [doctors] = useData();
    const [carts, setCart] = useState();
    const history = useHistory();

    useEffect(() => {
      const newDoctors = doctors?.filter((doctor) => doctor.id === bookingId);
      setCart(newDoctors);
    }, [doctors]);

    
    const handleDoctorClick = () => {
        history.push(`/doctor/${bookingId}`)
    }
    return (
        <div className="container py-5">
            {   
                carts?.length === 0 ?
                <h2 style={{textAlign: 'center', color: '#1976d2', marginTop: '50px'}}>Loading...</h2>
                :
                carts?.map(cart => <div key={cart.id}>
                    <div className="booking-details">
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
                            <button onClick={handleDoctorClick} className="btn btn-primary w-100 mb-2">View Profile</button>
                        </div>
                     </div>
                     <div className="booking-date">
                         {
                             cart.dates?.map((item, index) => <div key={index}>
                                <div>
                                    <button className="btn btn-primary m-2">{item.date}</button>
                                </div>
                            </div>)
                         }
                     </div>
                     <div className="booking-time">
                         {
                             cart.times?.map((item, index) => <div key={index}>
                                <div>
                                    <button className="btn btn-danger m-2">{item.time}</button>
                                </div>
                            </div>)
                         }
                     </div>
                </div>
            )}
        </div>
    );
};

export default Booking;