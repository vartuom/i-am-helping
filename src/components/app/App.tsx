import './App.scss';
import {Link, Route, Routes} from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";
import PersonalPage from '../../pages/PersonalPage/PersonalPage';
import TextButton from '../ui/TextButton/TextButton';


function App() {
  return (
    <div className="App">
      <TextButton text="Подтвердить"/>
      <TextButton color="dark" text="Применить"/>

      <nav className='header'>
        <Link to='/'>Главная</Link>
        <Link to='/anotherTestPage'>Тестовая страница</Link>
        <Link to='/personal'>Личный кабинет</Link>
        <Link to='/blog'>Блог</Link>
        <Link to='/privacy'>Политика конфиденциальности</Link>
        <Link to='/privacy'>Контакты</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/anotherTestPage" element={<AnotherTestPage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </div>
  );
}

export default App;
