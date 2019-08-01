import React from 'react';
import './App.css';
import MainMap from './components/MainMap'
import {Grid} from '@material-ui/core'
import FormComp from './components/FormComp'
import Something from './components/Something';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid  xs={6} item>
      <MainMap />
      </Grid>
      <Grid xs={6} item>
        <FormComp />
      </Grid>
      </Grid>
      <Something />
    </div>
  );
}

export default App;
