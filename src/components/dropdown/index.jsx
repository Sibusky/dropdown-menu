import React, { useEffect, useRef, useState } from 'react';
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
  const [isInViewport, setIsInViewport] = useState(false);

  const menuRef = useRef();
  const triggerRef = useRef();

  // observer to follow is trigger in viewport or not
  useEffect(() => {
    const newRef = triggerRef;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('Component is in the viewport');
        setIsInViewport(true)
      } else {
        console.log('Component is not in the viewport');
        setIsInViewport(false)
      }
    });

    if (newRef.current) {
      observer.observe(newRef.current);
    }

    return () => {
      if (newRef.current) {
        observer.unobserve(newRef.current);
      }
    };
  }, []);

  return (
    <div className='dropdown'>
      <button
        className='dropdown__trigger text'
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
        {trigger}&nbsp; &nbsp;⫶
      </button>
      <div
        className={`dropdown__overlay${isOpen && isInViewport ? ' dropdown__overlay_opened' : ''}`}
        onClick={handleClose}
      ></div>
      <ul
        className={`dropdown__menu${isOpen && isInViewport ? ' dropdown__menu_opened' : ''}`}
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
            handleClose={handleClose}
          />
        ))}
      </ul>
    </div>
  );
}
