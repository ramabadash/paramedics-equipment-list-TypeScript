import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Routes, Route, useNavigate } from 'react-router-dom';
// Components
import EntryForm from './EntryForm';
import InventoryList from './InventoryList';
// Style
import '../styles/App.css';

function App() {
  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  // Navigate to entry form if not logged
  const isLogged = (loggedAnswer: boolean) => {
    if (!loggedAnswer) {
      navigate('/');
    }
  };
  const worker = useAppSelector(state => state.worker);
  console.log({ worker });
  const equipment = useAppSelector(state => state.equipment);
  console.log({ equipment });

  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryForm />} />
        <Route
          path='/inventory'
          element={<InventoryList isLogged={isLogged} />}
        />
        {/* <Route path='/end' element={<End isLogged={isLogged} />} />
        <Route path='/missing' element={<MissingItems isLogged={isLogged} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
