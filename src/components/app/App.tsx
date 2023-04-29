import './App.scss';
import { Route, Routes } from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";
import PersonalPage from '../../pages/PersonalPage/PersonalPage';
import { AppHeader } from '../app-header/app-header';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<TestPage />} />y
        <Route path="/anotherTestPage" element={<AnotherTestPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        {/*добавить нужные роуты*/}
      </Routes>
    </div>
  );
}

export default App;
