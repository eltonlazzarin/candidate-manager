import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllCandidates from './pages/AllCandidates';
import CandidatesAttended from './pages/CandidatesAttended';
import TrashCan from './pages/TrashCan';
import Candidate from './pages/Candidate';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AllCandidates} />
        <Route path="/candidatesattended" component={CandidatesAttended} />
        <Route path="/trashcan" component={TrashCan} />
        <Route path="/candidates/:uuid" component={Candidate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
