import React from 'react';
import './styles.css';

export default function Footer({ footerRef }) {
  return (
    <footer className='footer section' ref={footerRef}>
      <div className='footer__container section__container'>
        <p className='footer__text'>And this is the FOOTER</p>
      </div>
    </footer>
  );
}
