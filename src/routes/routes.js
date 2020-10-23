import React from 'react';
import { Router, Route } from "react-router-dom";
import HomePage from '../containers/HomePage';
import history from './history';

function Routes() {
  return (   
     <Router history={history}>               
         <Route  path="/" component={HomePage} />      
     </Router>
  );
}

export default Routes;


