import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Routes, Route, useNavigate } from 'react-router-dom';
// Components
import EntryForm from './EntryForm';
import InventoryList from './InventoryList';
import End from './End';
import MissingItems from './MissingItems';
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

  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryForm />} />
        <Route
          path='/inventory'
          element={<InventoryList isLogged={isLogged} />}
        />
        <Route path='/end' element={<End isLogged={isLogged} />} />
        <Route path='/missing' element={<MissingItems isLogged={isLogged} />} />
      </Routes>
    </div>
  );
}

export default App;
