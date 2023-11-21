import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Treatment = () => {
return (
    <div class="px-24">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="w-80 shadow-2xl rounded" />
    <div className='px-20'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
);
};

export default Treatment;