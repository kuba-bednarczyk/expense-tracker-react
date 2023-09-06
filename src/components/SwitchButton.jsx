import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const SwitchButton = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <>
      <div className='switch-btn-container'>
        <p>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
        <input
          onChange={toggleTheme}
          type='checkbox'
          id='switch-btn-check'
          checked={theme === 'dark'}
        />
        <label htmlFor='switch-btn-check' className='switch-btn'></label>
      </div>
    </>
  );
};

export default SwitchButton;
