import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceHome from './ServiceHome';

const ServicesHome = () => {
    const [service, setService] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                {
                    service.map(s =><ServiceHome
                    key={s._id}
                    s={s}
                    ></ServiceHome>)
                }
                
            </div>
            <button  className='mx-auto bg-red-500 rounded-lg p-3 w-20 text-black font-extrabold text-xl '><Link to={'/service'}>More</Link></button>
        </div>
    );
};

export default ServicesHome;