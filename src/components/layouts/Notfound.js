import React from 'react';

const Notfound = () => {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ height: '90vh' }}
    >
      <h1 className='lead'>Page You Search Does not Exist </h1>
      <i
        class='fas fa-heart-broken'
        style={{ color: '#f00', fontSize: '3rem' }}
      ></i>
    </div>
  );
};

export default Notfound;
