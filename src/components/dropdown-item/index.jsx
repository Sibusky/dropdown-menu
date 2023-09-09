import React from 'react';
import './styles.css';

export function DropDownItem({ title, icon, color, changeColor }) {
  return (
    <li className='dropdown__item' onClick={() => changeColor(title.split(' ')[0], color)}>
      <p className='dropdown__text' style={{color: color}}>    
        {title} {color}<span className='dropdown__icon'> {icon}</span>
      </p>
    </li>
  );
}
