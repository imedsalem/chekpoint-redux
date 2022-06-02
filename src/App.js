import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeTodo from './page/ChangeTodo';
import Home from './page/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ChangeTodo />} />
      </Routes>
      
    </div>
  );
}

export default App;
