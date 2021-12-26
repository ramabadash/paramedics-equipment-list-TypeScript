import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
// Actions
import { addItem } from '../reducers/equipmentReducer';
// Pop Up messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddItemForm({ numOfEquipment }: { numOfEquipment: number }) {
  /***** STATES *****/
  const [itemName, setItemName] = useState('');
  const [fullQuantity, setFullQuantity] = useState(0);

  /***** FUNCTIONS  *****/
  const dispatch = useAppDispatch();

  // PopUp error message
  const notify = (message: string) =>
    toast.error(`${message}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // Add item to state
  const handleAddItem = () => {
    if (!itemName || !fullQuantity || fullQuantity < 0) {
      notify('Please fill all details to add new item');
      return;
    } else {
      dispatch(addItem({ name: itemName, fullQuantity: Number(fullQuantity) }));
    }
    setItemName('');
    setFullQuantity(0);
  };
  return (
    <tfoot>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <tr>
        <th className='index-table'>{numOfEquipment + 1}</th>
        <td>
          <input
            type='text'
            placeholder="Item's name"
            value={itemName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setItemName(e.target.value)
            }
          />
        </td>
        <td>
          <input
            type='number'
            placeholder='Full quantity'
            value={fullQuantity ? Number(fullQuantity) : ''}
            min={0}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFullQuantity(Number(e.target.value))
            }
          />
        </td>
        <td>
          <button onClick={handleAddItem} className='add-item-btn'>
            <i className='far fa-plus-square'></i> Add item
          </button>
        </td>
      </tr>
    </tfoot>
  );
}

export default AddItemForm;
