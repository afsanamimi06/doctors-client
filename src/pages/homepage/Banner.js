import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
return (
<div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
      <p class="py-6 pr-14">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-none ">Get Started</button>
    </div>
  </div>
</div>
);
};

export default Banner;