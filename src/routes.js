import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllCandidates from './pages/AllCandidates';
import CandidatesAttended from './pages/CandidatesAttended';
import CandidatesDeclined from './pages/CandidatesDeclined';
import Candidate from './pages/Candidate';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AllCandidates} />
        <Route path="/candidatesattended" component={CandidatesAttended} />
        <Route path="/candidatesdeclined" component={CandidatesDeclined} />
        <Route path="/candidates/:uuid" component={Candidate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
