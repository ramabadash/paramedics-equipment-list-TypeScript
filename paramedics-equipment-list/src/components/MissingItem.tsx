import React, { useState } from 'react';
// Types
import { ShiftItem } from '../types/types';

function MissingItem({ index, item }: { index: number; item: ShiftItem }) {
  /***** STATES *****/
  const [checked, setChecked] = useState(false);

  /***** FUNCTIONS *****/
  const toggleCheck = () => {
    setChecked(prevState => !prevState);
  };

  return (
    <li key={index}>
      <input type='checkbox' onClick={toggleCheck} />
      {checked
        ? [
            <span className='done'>{item.name}</span>,
            <span className='done'>{item.missing}</span>,
          ]
        : [<span>{item.name}</span>, <span>{item.missing}</span>]}
    </li>
  );
}

export default MissingItem;
