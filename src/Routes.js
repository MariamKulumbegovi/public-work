import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { MainMenu } from './components/Main-Menu/MainMenu';
import * as path from './constants/paths';
import { Vacancy } from './components/vacancy/Vacancy';
import { Questions } from './components/Questions/Questions';
export const Routes = () => {
  return (
    <Switch>
      <Route index path={path.HOME_PATH} element={<MainMenu />} />
      <Route path={path.VACANCY_PATH} element={<Vacancy />} />
      <Route path={path.QUESTIONS_PATH} element={<Questions />} />

      {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route element={<LeagueStandings />} />
        </Route> */}
    </Switch>
  );
};
