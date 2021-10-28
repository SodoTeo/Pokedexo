import React from 'react';
import './App.css';

import Pokedex from './pokedex.js';
import ActionAreaCard from './card.js';

const App = () => (
  <div className="App">
    <Pokedex />
    <ActionAreaCard />
  </div>
);

export default App;