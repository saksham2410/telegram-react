import React from 'react';
 
import { withAuthorization } from '../Session';
import Dashboard from './Dashboard';
 
const HomePage = () => (
  <div>
    <Dashboard/>
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);