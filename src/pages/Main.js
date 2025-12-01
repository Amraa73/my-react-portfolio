import React from 'react';
import '../component/Main.css';

const Hero = () => {
  return (
    <section className="main">
      <div className='main-content'>
        <h2>Hey, I am <span>We</span> Building with your dream <span>Branding</span> by <span>Website</span> </h2>
        <p>
          Contrary to popular belief, 
          Lorem Ipsum is not simply 
          random text. It has roots 
          in a piece of classical Latin
           literature from 45 BC, making 
           it over 2000 years old. 
        </p>
      </div>
      <button>
        <p className='txt-1'>Make order</p>
        <p className='txt-2'>Make order</p>
      </button>
    </section>
  );
};

export default Hero;