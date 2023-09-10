import React from 'react';
import { DropDown } from '../components/dropdown';
import { leftDropdown, centerDropdown, rightDropdown } from '../constants/dropdown-items';

export function Main({
  isOpen,
  isClicked,
  handleTriggerClick,
  handleClose,
  changeColor,
  position,
  blockRef,
  mainRef,
}) {


  return (
    <main className='main' ref={mainRef}>
      <section className='block section'>
        <div className='block__container section__container' ref={blockRef}>
          <DropDown
            id={leftDropdown.location}
            isOpen={isClicked === leftDropdown.location ? isOpen : false}
            handleTriggerClick={handleTriggerClick}
            handleClose={handleClose}
            position={position}
            items={leftDropdown.items}
            trigger={leftDropdown.trigger}
            changeColor={changeColor}
          />
          <DropDown
            id={centerDropdown.location}
            isOpen={isClicked === centerDropdown.location ? isOpen : false}
            handleTriggerClick={handleTriggerClick}
            handleClose={handleClose}
            position={position}
            items={centerDropdown.items}
            trigger={centerDropdown.trigger}
            changeColor={changeColor}
          />
          <DropDown
            id={rightDropdown.location}
            isOpen={isClicked === rightDropdown.location ? isOpen : false}
            handleTriggerClick={handleTriggerClick}
            handleClose={handleClose}
            position={position}
            items={rightDropdown.items}
            trigger={rightDropdown.trigger}
            changeColor={changeColor}
          />
        </div>
      </section>
    </main>
  );
}
