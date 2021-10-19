import React from 'react';
import './Doctors.css';
import DoctorsSummery from '../DoctorsSummery/DoctorsSummery';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';

const Doctors = () => {
   const [doctors] = useData();
    return (
        <div className="py-5" style={{backgroundColor: '#F9FAFE'}}>
            <div className="container">
                <h2 className="text-center py-2" style={{color: '#1976d2'}}>Our Specialities</h2>
                <div className="doctors-container">
                    {   
                        doctors?.length === 0 ?
                        <h2 style={{textAlign: 'center', color: '#1976d2', marginTop: '50px'}}>Loading...</h2>
                        :
                        doctors?.slice(0, 4).map(doctor => <DoctorsSummery doctor={doctor} key={doctor.id}></DoctorsSummery>)
                    }
                </div>
                <div className="text-center mt-3">
                    <Link to="/doctors">
                        <button className="btn btn-primary doctors-btn">All Doctors</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctors;