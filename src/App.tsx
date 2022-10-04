import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';

import './styles/reset.scss';
import './styles/main.scss';
import './styles/animations.scss';

const App = (): JSX.Element =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:code" element={<CountryPage />} />
    </Routes>
  );

export default App;
