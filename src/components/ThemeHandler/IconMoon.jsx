import React from 'react';

const IconMoon = ({ dark }) => {
  return (
    <div className='mx-auto sm:max-w-375px md:max-w-768px lg:max-w-1440px'>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <path
        fill="none"
        stroke={dark ? '#a445ad' : '#838383'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
    </div>
  );
};

export default IconMoon;

