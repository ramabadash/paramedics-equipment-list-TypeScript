import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
// Actions
import { submitEquipmentForm } from '../reducers/equipmentReducer';
// Components
import AddItemForm from './AddItemForm';
import ItemRow from './ItemRow';
// Types
import { ShiftItem, CheckIsLoginFunc } from '../types/types';
// Style
import '../styles/InventoryList.css';

function InventoryList({ isLogged }: { isLogged: CheckIsLoginFunc }) {
  /***** STATES *****/
  // Get full list from state
  const fullEquipmentList = useAppSelector(
    ({ equipment }) => equipment.requiredEquipmentList
  );
  // Get is logged
  const logged = useAppSelector(({ worker }) => worker.logged);

  // State to all the missing items [{name: "equipment", missing: "80"}, ...]
  const [missingItems, setMissingItems] = useState<ShiftItem[]>([]);

  /***** EFFECT *****/
  useEffect(() => {
    isLogged(logged);
  });

  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(submitEquipmentForm({ data: missingItems }));
    navigate('/end');
  };

  return (
    <div className='inventory-list-container'>
      <h1>Welcome to the shift!</h1>

      <h2>Inventory List</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item's name</th>
            <th>Full quantity</th>
            <th>Current quantity</th>
            <th>Missing</th>
          </tr>
        </thead>
        <tbody>
          {fullEquipmentList.map((item, i) => {
            return (
              <ItemRow
                item={item}
                i={i}
                key={i}
                setMissingItems={setMissingItems}
              />
            );
          })}
        </tbody>
        <AddItemForm numOfEquipment={fullEquipmentList.length} />
      </table>
      <button onClick={handleSubmit} className='submit-btn'>
        Done <i className='far fa-check-circle'></i>
      </button>
    </div>
  );
}

export default InventoryList;
