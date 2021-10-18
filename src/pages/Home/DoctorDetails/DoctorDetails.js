import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const {doctorId} = useParams();
    console.log(doctorId);
    return (
        <div>
            DoctorDetails
        </div>
    );
};

export default DoctorDetails;