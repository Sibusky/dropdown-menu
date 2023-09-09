import React from 'react';
import { DropDown } from '../components/dropdown';

export function Main() {
  return (
    <main className='main'>
      <section className='field section'>
        <div className='field__container section__container'>
          <DropDown />
          <DropDown />
          <DropDown />
        </div>
      </section>
    </main>
  );
}
