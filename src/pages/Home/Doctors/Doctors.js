import React, { useEffect, useState } from 'react';
import './Doctors.css';
import DoctorsSummery from '../DoctorsSummery/DoctorsSummery';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('./health.json')
        .then(data => data.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div className="py-5" style={{backgroundColor: '#F9FAFE'}}>
            <div className="container">
                <h2 className="text-center py-2">Our Specialities</h2>
                <div className="doctors-container">
                    {
                        doctors?.slice(0, 4).map(doctor => <DoctorsSummery doctor={doctor} key={doctor.id}></DoctorsSummery>)
                    }
                </div>
                <div className="text-center mt-2">
                    <Link to="/doctors">
                        <button className="btn btn-primary w-25">All Doctors</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctors;