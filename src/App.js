import React from 'react';
import './App.css';
import ApiService from './ApiService';

function App() {
  ApiService.getMovies()
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
