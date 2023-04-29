import './App.scss';
import { Route, Routes } from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";
import PersonalPage from '../../pages/PersonalPage/PersonalPage';
import { AppHeader } from '../app-header/app-header';
import VolunteerPage from '../../pages/VolunteerPage/VolunteerPage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/anotherTestPage" element={<AnotherTestPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        {/*добавить нужные роуты*/}
      </Routes>
    </div>
  );
}

export default App;
