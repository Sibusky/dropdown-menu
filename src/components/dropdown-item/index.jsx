import React from 'react';
import './styles.css';

export function DropDownItem({ title, icon, color, changeColor, handleClose }) {
  return (
    <li
      className='dropdown__item'
      onClick={() => {
        changeColor(title.split(' ')[0], color);
        handleClose();
      }}
    >
      <p className='dropdown__text' style={{ color: color }}>
        {title} {color}
      </p>
      <span className='dropdown__icon'> {icon}</span>
    </li>
  );
}
