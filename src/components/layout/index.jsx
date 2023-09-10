import React from 'react';
import './styles.css';
import { Header } from '../header';
import Footer from '../footer';

export function Layout({ children, headerRef, footerRef }) {
  return (
    <div className='layout'>
      <Header headerRef={headerRef} />
      {children}
      <Footer footerRef={footerRef} />
    </div>
  );
}