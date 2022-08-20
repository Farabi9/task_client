import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Service from './Service';

const Services = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                if (user || loading) {
                    
                    setServices(data)
                }
                else {
                    navigate('/login')
                }
            })
    }, [])

    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            {
                services.map(service => <Service
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;