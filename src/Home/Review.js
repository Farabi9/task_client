import React from 'react';
import man1 from '../Images/man1.jpg'

const Review = () => {
    return (
        <div class="card w-full bg-green-100 grid lg:grid-cols-3 sm:grid-cols-1 shadow-2xl mt-10 mb-10 ">
            
  <div class="card-body">
  <div class="avatar mx-auto">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={man1} />
  </div>
</div>
    <h2 class="card-title font-extrabold mx-auto text-black">Jhon Heikings</h2>
    <p className='text-black text-lg'>They are doing great. <br /> I am pleasure to take course from them</p>
    <div class="card-actions justify-end mx-auto">
      
      <div class="rating rating-lg ">
  <input type="radio" name="rating-9" class="rating-hidden" />
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
</div>
      
    </div>
  </div>
  <div class="card-body">
  <div class="avatar mx-auto">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={man1} />
  </div>
</div>
    <h2 class="card-title font-extrabold mx-auto text-black">Jhon Heikings</h2>
    <p className='text-black text-lg'>They are doing great. <br /> I am pleasure to take course from them</p>
    <div class="card-actions justify-end mx-auto">
      
      <div class="rating rating-lg ">
  <input type="radio" name="rating-9" class="rating-hidden" />
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
</div>
      
    </div>
  </div>
  <div class="card-body">
  <div class="avatar mx-auto">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={man1} />
  </div>
</div>
    <h2 class="card-title font-extrabold mx-auto text-black">Jhon Heikings</h2>
    <p className='text-black text-lg'>They are doing great. <br /> I am pleasure to take course from them</p>
    <div class="card-actions justify-end mx-auto">
      
      <div class="rating rating-lg ">
  <input type="radio" name="rating-9" class="rating-hidden" />
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
  <input type="radio" name="rating-9" class="mask mask-star-2 bg-black" checked disabled/>
</div>
      
    </div>
  </div>
</div>
    );
};

export default Review;