import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import {generatePalette} from './colorHelpers';

function App() {
  return (
    
      <Switch>
        <Route exact path='/'  />
        <Route exact path='/palette/:id' render={() => <h1>Ciao</h1>} />
      </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
