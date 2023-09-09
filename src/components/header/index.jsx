import React from 'react';
import './styles.css';

export function Header({ headerRef }) {
  return (
    <header className='header section' ref={headerRef}>
      <div className='header__container section__container'>
        <p className='header__text'>This is the HEADER. Scroll down 👇</p>
      </div>
    </header>
  );
}
