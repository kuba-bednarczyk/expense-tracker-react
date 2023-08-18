import React from 'react';

const SwitchButton = () => {
  return (
    <>
      <div className='switch-btn-container'>
        <p>Light Mode</p>
        <input type='checkbox' id='switch-btn-check' />
        <label htmlFor='switch-btn-check' className='switch-btn'></label>
      </div>
    </>
  );
};

export default SwitchButton;
