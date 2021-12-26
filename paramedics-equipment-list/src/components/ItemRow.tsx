import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
// Actions
import { deleteItem } from '../reducers/equipmentReducer';
// Types
import { ItemRowProps } from '../types/types';

function ItemRow({ item, i, setMissingItems }: ItemRowProps) {
  /***** STATES *****/
  const [currentQuantity, setCurrentQuantity] = useState(0);

  /***** FUNCTIONS *****/
  const dispatch = useAppDispatch();

  // Delete item from the form
  const handleDelete = () => {
    // Filter from full equipment list
    dispatch(deleteItem({ index: i }));
    // Filter from missing list
    setMissingItems(prevState => {
      const copyOfArr = [...prevState];
      return copyOfArr.filter((item, index) => index !== i);
    });
  };

  // On Current quantity change update two states
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    setCurrentQuantity(quantity);

    // If missing item is above 0
    if (currentQuantity < item.fullQuantity) {
      setMissingItems(prevState => {
        const updateItems = [...prevState]; // Copy the array
        const missingQuantity =
          item.fullQuantity - quantity < 0 ? 0 : item.fullQuantity - quantity;
        updateItems[i].missing = missingQuantity; // Update the missing quantity of an item
        return updateItems;
      });
    }
  };
  /***** EFFECT *****/
  // Build the array with objects {name : ? , missing: ?} for every item on first render
  useEffect(() => {
    setMissingItems(prevState => [
      ...prevState,
      { name: item.name, missing: Number(item.fullQuantity) },
    ]);
  }, []);

  return (
    <tr key={i}>
      <td className='index-table'>
        <strong>{i + 1}</strong>
      </td>
      <td className='name-table'>{item.name}</td>
      <td>{item.fullQuantity}</td>
      <td>
        <input
          type='number'
          min={0}
          defaultValue={0}
          onChange={handleQuantityChange}
        />
      </td>
      <td>
        {item.fullQuantity - currentQuantity < 0
          ? 0
          : item.fullQuantity - currentQuantity}
      </td>
      {item.deleteAble ? (
        <span onClick={handleDelete} className='delete-btn'>
          <i className='far fa-trash-alt'></i>
        </span>
      ) : (
        <span></span>
      )}
    </tr>
  );
}

export default ItemRow;
