import React from 'react';
import mypic from '../../images/img/MePA.jpeg';

export default function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <h1 className='about__name'>About the Author</h1>
        <div className='about__info'>
          <img className='about__img' src={mypic} alt='Photo of melissa' />
          <div>
            <p className='about__text'>
              My name is Melissa Lawrence, I am currently a web developer
              student at Practicum. I have experience with Javascript, React,
              ExpressJS, MongoDB and more.
            </p>
            <p className='about__text'>
              At Practicum, they have taught me a lot of useful skills like how
              to write clean and readable code. My favorite part about being
              apart of this program is having projects to complete with each
              step. Then having those projects reviewed by professional
              developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
