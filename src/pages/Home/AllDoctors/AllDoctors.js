import React from 'react';
import useData from '../../../hooks/useData';
import AllDoctorsSummery from '../AllDoctorsSummery/AllDoctorsSummery';
import './AllDoctors.css';

const AllDoctors = () => {
    const [doctors] = useData();
    return (
        <div className="py-5" style={{backgroundColor: '#F9FAFE'}}>
            <div className="container">
                <h2 className="py-2">Total Specialities Available: {doctors.length}</h2>
                <div className="all-doctors-container">
                    {   
                        doctors?.length === 0 ?
                        <h2 style={{textAlign: 'center', color: '#1976d2', marginTop: '50px'}}>Loading...</h2>
                        :
                        doctors?.map(doctor => <AllDoctorsSummery doctor={doctor} key={doctor.id}></AllDoctorsSummery>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllDoctors;