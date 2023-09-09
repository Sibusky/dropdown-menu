import React, { useState } from 'react';
import './styles.css';

export function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  function handleTriggerClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='dropdown'>
      <button className='dropdown__trigger' onClick={handleTriggerClick}>
        trigger
      </button>
      <ul className={`dropdown__list${isOpen ? ' dropdown__list_opened' : ''}`}>
        <li className='dropdown__item' onClick={() => console.log('li clicked')}>
          <p className='dropdown__text'>
            item 1<span className='dropdown__icon'> icon</span>
          </p>
        </li>
        <li className='dropdown__item'onClick={() => console.log('li clicked')}>
          <p className='dropdown__text'>
            item 2<span className='dropdown__icon'> icon</span>
          </p>
        </li>
        <li className='dropdown__item'onClick={() => console.log('li clicked')}>
          <p className='dropdown__text'>
            item 3<span className='dropdown__icon'> icon</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
