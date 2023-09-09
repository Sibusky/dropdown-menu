import React from 'react';
import './styles.css';

export function Header({ headerRef }) {
  return (
    <header className='header section' ref={headerRef}>
      <div className='header__container section__container'>header</div>
    </header>
  );
}
