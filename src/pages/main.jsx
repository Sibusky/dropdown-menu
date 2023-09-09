import React from 'react';
import { DropDown } from '../components/dropdown';

export function Main({ isOpen, handleTriggerClick, position }) {
  return (
    <main className='main'>
      <section className='field section'>
        <div className='field__container section__container'>
          <DropDown isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
          <DropDown isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
          <DropDown isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
        </div>
      </section>
    </main>
  );
}
