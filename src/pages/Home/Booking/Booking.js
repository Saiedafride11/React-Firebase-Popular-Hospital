import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faStar, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import useData from '../../../hooks/useData';

const Booking = () => {
    const {bookingId} = useParams();
    const [doctors] = useData();
    const [carts, setCart] = useState();

    useEffect(() => {
      const newDoctors = doctors?.filter((doctor) => doctor.id === bookingId);
      setCart(newDoctors);
    }, [doctors]);
    return (
        <div className="container">
            {
                carts?.map(cart => <div key={cart.id}>
                    <div className="booking-details">
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
                            <p><strong>Locatiffffon: </strong>{cart.location}</p>
                            <p><strong>Visit: </strong>{cart.visit}</p>
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