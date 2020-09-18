import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import {generatePalette} from './colorHelpers';

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    
    <div>
      <Palette {...seedColors[5]}/>
    </div>
  );
}

export default App;
