import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
export const Routes = () => {
  return (
    <Switch>
      <Route index path="/" element={<App />}>
        <Route element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route element={<LeagueStandings />} />
        </Route>
      </Route>
    </Switch>
  );
};
