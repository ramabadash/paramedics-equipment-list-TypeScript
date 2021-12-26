import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Routes, Route } from 'react-router-dom';
import EntryForm from './EntryForm';
// Style
import '../styles/App.css';

function App() {
  const worker = useAppSelector(state => state.worker);
  console.log({ worker });

  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryForm />} />
        {/* <Route
          path='/inventory'
          element={<InventoryList isLogged={isLogged} />}
        />
        <Route path='/end' element={<End isLogged={isLogged} />} />
        <Route path='/missing' element={<MissingItems isLogged={isLogged} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
