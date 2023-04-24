import './App.scss';
import {Link, Route, Routes} from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";
import PersonalPage from '../../pages/PersonalPage/PersonalPage';
<<<<<<< HEAD
// import AppHeader from '../app-header/app-header';
=======
import { Button } from '../ui/buttons/Button';
import { ArrowIconBig, CrossIcon, EditIcon, MessageIcon, PhoneIcon } from '../ui/icons/icons';
>>>>>>> 8427332e00283e1944ded3cef7b27adeece698f2


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <AppHeader/> */}
      
      {/* Временнный хэдер. Удалить после создания целевого компонента */}
=======
=======
>>>>>>> 8427332e00283e1944ded3cef7b27adeece698f2
      <Button variant="icon" size="small" color="light" icon={<MessageIcon/>}/>
      <Button figure="close" icon={<CrossIcon/>} />
      <Button figure="edit" icon={<EditIcon/>} />
      <Button figure="search" icon={<ArrowIconBig type="white"/>} label="Пoиск" />
      <Button animated="excel" />
     

<<<<<<< HEAD
>>>>>>> bfdb1e0 (added excel button)
=======
>>>>>>> 8427332e00283e1944ded3cef7b27adeece698f2
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
