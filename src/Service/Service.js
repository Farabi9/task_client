import React from 'react';

const Service = ({service}) => {

    const {name, img, description, price, mentor} = service;

    return (
        <div className="card w-76 h-50 my-5 mx-5 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-violet-200">{name}</h2>
          <p className='text-violet-100 text-xl'>{description}</p>
          <p className='text-xl text-violet-100'>Mentor: {mentor}</p>
          <p className='text-violet-100'>Price: {price}</p>
          <button className='bg-red-300 text-black w-20 mx-auto rounded-lg p-2'>Buy NOW</button>
        </div>
      </div>
    );
};

export default Service;