import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllCandidates from './pages/AllCandidates';
import CandidatesAttended from './pages/CandidatesAttended';
import TrashCan from './pages/TrashCan'; 

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={AllCandidates} />
        <Route path='/candidatesattended' component={CandidatesAttended} />
        <Route path='/trashcan' component={TrashCan} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;