import './App.scss';
import {Link, Route, Routes} from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";
import PersonalPage from '../../pages/PersonalPage/PersonalPage';
import { Button } from '../ui/buttons/Button';
import { ArrowIconBig, CrossIcon, EditIcon, MessageIcon, PhoneIcon } from '../ui/icons/icons';


function App() {
  return (
    <div className="App">
      <Button variant="icon" size="small" color="light" icon={<MessageIcon/>}/>
      <Button figure="close" icon={<CrossIcon/>} />
      <Button figure="edit" icon={<EditIcon/>} />
      <Button figure="search" icon={<ArrowIconBig type="button"/>} label="Пoиск" />
      <Button animated="excel" />
     

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
