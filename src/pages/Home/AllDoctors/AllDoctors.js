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
                        doctors?.map(doctor => <AllDoctorsSummery doctor={doctor} key={doctor.id}></AllDoctorsSummery>)
                    }
                </div>
                {/* <div className="text-center mt-2">
                    <Link to="/doctors">
                        <button className="btn btn-primary w-25">All Doctors</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default AllDoctors;