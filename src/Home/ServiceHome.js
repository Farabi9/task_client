import React from 'react';


const ServiceHome = ({s}) => {
    const {name, price, description, mentor, img} = s;

   

    return (
        <div className="card w-76 h-50 my-5 mx-5 bg-base-100 shadow-md shadow-red-500">
        <figure><img src={img} alt="Course" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-violet-200">{name}</h2>
          <p className='text-violet-100 text-xl'>{description}</p>
          <p className='text-xl text-violet-100'>Mentor: {mentor}</p>
          <p className='text-violet-100'>Price: {price}</p>
          
        </div>
      
      </div>
    );
};

export default ServiceHome;