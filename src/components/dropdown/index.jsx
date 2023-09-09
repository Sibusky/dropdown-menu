import React, { useRef } from 'react';
import './styles.css';

export function DropDown({ isOpen, handleTriggerClick, position }) {
  const menuRef = useRef();
  const triggerRef = useRef();

  return (
    <div className='dropdown'>
      <button
        className='dropdown__trigger'
        ref={triggerRef}
        onClick={(event) =>
          handleTriggerClick(
            event,
            menuRef.current.clientHeight,
            menuRef.current.clientWidth,
            triggerRef.current.clientHeight,
            triggerRef.current.clientWidth
          )
        }
      >
        trigger
      </button>
      <div className='test'>test</div>
      <ul
        className={`dropdown__menu${isOpen ? ' dropdown__menu_opened' : ''}`}
        ref={menuRef}
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
