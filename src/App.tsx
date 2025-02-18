import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import globalRouter from './route';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={globalRouter} />
    </div>
  );
}

export default App;
