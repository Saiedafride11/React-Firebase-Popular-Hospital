import  { useEffect, useState } from 'react';

const useData = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('/health.json')
        .then(data => data.json())
        .then(data => setDoctors(data))
    }, [])
    return [doctors]
};

export default useData;