import React from 'react'
import Ed from '../Images/edtech-1-808x451.png';

const Banner = () => {
  return (
    <div class="hero lg:p-20 bg-base-100 lg:shadow-2xl mt-10" >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src={Ed} class="max-w-sm rounded-lg ml-12 shadow-2xl" />
      <div >
        <h1 class="text-5xl font-bold text-violet-200">ED-Tech</h1>
        <p class="py-6 text-white">
          We are providing our student different type of programming courses. <br /> You can find here almost all the programming language classes with the best mentor. <br /> We are providing best support system for our students.
        </p>
        
      </div>
    </div>
  </div>
  );
};

export default Banner;