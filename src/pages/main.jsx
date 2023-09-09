import React from 'react';
import { DropDown } from '../components/dropdown';

export function Main({ isOpen, isClicked, handleTriggerClick, handleClose, position, blockRef }) {
  return (
    <main className='main'>
      <section className='block section'>
        <div className='block__container section__container' ref={blockRef}>
          <DropDown
            id='left'
            isOpen={isClicked === 'left' ? isOpen : false}
            handleTriggerClick={handleTriggerClick}
            handleClose={handleClose}
            position={position}
          />
          <DropDown
            id='center'
            isOpen={isClicked === 'center' ? isOpen : false}
            handleTriggerClick={handleTriggerClick}
            handleClose={handleClose}
            position={position}
          />
          <DropDown
            id='right'
            isOpen={isClicked === 'right' ? isOpen : false}
            handleTriggerClick={handleTriggerClick}
            handleClose={handleClose}
            position={position}
          />
        </div>
      </section>
    </main>
  );
}
