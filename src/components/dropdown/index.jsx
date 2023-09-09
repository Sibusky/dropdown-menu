import React, { useRef } from 'react';
import './styles.css';
import { DropDownItem } from '../dropdown-item';

export function DropDown({
  id,
  isOpen,
  handleTriggerClick,
  handleClose,
  position,
  items,
  trigger,
  changeColor,
}) {
  // use refs to define sizes of elements
  const menuRef = useRef();
  const triggerRef = useRef();

  return (
    <div className='dropdown'>
      <button
        className='dropdown__trigger'
        id={id}
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
        {trigger}
      </button>
      <div
        className={`dropdown__overlay${isOpen ? ' dropdown__overlay_opened' : ''}`}
        onClick={handleClose}
      ></div>
      <ul
        className={`dropdown__menu${isOpen ? ' dropdown__menu_opened' : ''}`}
        ref={menuRef}
        style={{ top: position.top, left: position.left }}
      >
        {items.map((item) => (
          <DropDownItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            color={item.color}
            changeColor={changeColor}
          />
        ))}
      </ul>
    </div>
  );
}
