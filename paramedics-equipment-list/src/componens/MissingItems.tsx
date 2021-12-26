import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
// Actions
import { reset as resetEquipment } from '../reducers/equipmentReducer';
import { reset as resetWorker } from '../reducers/workerReducer';
// Components
import MissingItem from './MissingItem';
// Style
import '../styles/MissingItems.css';

function MissingItems({
  isLogged,
}: {
  isLogged: (loggedAnswer: boolean) => void;
}) {
  /***** STATES*****/
  // Get missing items list from state
  const missingItemsList = useAppSelector(
    ({ equipment }) => equipment.shiftList
  );

  // Get is logged
  const logged = useAppSelector(({ worker }) => worker.logged);

  /***** EFFECT *****/
  useEffect(() => {
    isLogged(logged);
  });

  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // End and reset
  const handleEnd = () => {
    dispatch(resetEquipment());
    dispatch(resetWorker());
    navigate('/');
  };

  return (
    <div className='missing-items-container'>
      <ul className='navigate-btns'>
        <li onClick={handleEnd} className='end-btn-two'>
          End <i className='far fa-times-circle'></i>
        </li>
        <li onClick={() => navigate('/end')} className='back-btn'>
          Go back
        </li>
      </ul>
      <h2>Missing item's</h2>
      <div className='list-container'>
        <ul className='missing-item-list'>
          {missingItemsList.map((item, index) => {
            if (item.missing !== 0) {
              return <MissingItem index={index} item={item} />;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default MissingItems;
