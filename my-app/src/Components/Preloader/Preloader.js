import React from 'react';

export default function LoadingPopUp(props) {
  return (
    <>
      <div className='loading'>
        <div className='loading__img'></div>
        <p className='loading__text'>Searching...</p>
      </div>
    </>
  );
}
