import { Auth } from './components/Authorization/Auth';
import { Password } from './components/Authorization/Password/Password';
import { Home } from './components/home/Home';
import { Routes as Switch, Route } from 'react-router-dom';
import * as path from './constants/paths';
import { MainMenu } from './components/Main-Menu/MainMenu';
import { Vacancy } from './components/vacancy/Vacancy';
import { Questions } from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route index path={'/auth'} element={<Auth />} />
        <Route path={'/password'} element={<Password />} />
        {/* <Route path={'/home'} element={<Home />} /> */}
        <Route index path={path.HOME_PATH} element={<MainMenu />} />
        <Route path={path.VACANCY_PATH} element={<Vacancy />} />
        <Route path={path.QUESTIONS_PATH} element={<Questions />} />
        <Route index path={'/'} element={<Home />} />
      </Switch>
    </div>
  );
}

export default App;
