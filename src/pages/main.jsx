import React from 'react';
import { DropDown } from '../components/dropdown';

export function Main({ isOpen, handleTriggerClick, position, blockRef }) {
  return (
    <main className='main'>
      <section className='block section'>
        <div className='block__container section__container' ref={blockRef}>
          <DropDown isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
          <DropDown isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
          <DropDown isOpen={isOpen} handleTriggerClick={handleTriggerClick} position={position} />
        </div>
      </section>
    </main>
  );
}
