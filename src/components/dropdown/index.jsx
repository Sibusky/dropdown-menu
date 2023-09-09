import React, { useState } from 'react';
import './styles.css';

export function DropDown({isOpen, handleTriggerClick, position}) {


  return (
    <div className='dropdown'>
      <button className='dropdown__trigger' onClick={handleTriggerClick}>
        trigger
      </button>
      <ul
        className={`dropdown__list${isOpen ? ' dropdown__list_opened' : ''}`}
        style={{ top: position.top, left: position.left }}
      >
        <li className='dropdown__item' onClick={() => console.log('li clicked')}>
          <p className='dropdown__text'>
            item 1<span className='dropdown__icon'> icon</span>
          </p>
        </li>
        <li className='dropdown__item' onClick={() => console.log('li clicked')}>
          <p className='dropdown__text'>
            item 2<span className='dropdown__icon'> icon</span>
          </p>
        </li>
        <li className='dropdown__item' onClick={() => console.log('li clicked')}>
          <p className='dropdown__text'>
            item 3<span className='dropdown__icon'> icon</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
