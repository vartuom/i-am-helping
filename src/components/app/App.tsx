import "./App.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";
import PersonalPage from "../../pages/PersonalPage/PersonalPage";
import { AppHeader } from "../app-header/app-header";
import Modal from "../modal/modal";
import ModalOne from "../modalExamples/modalOne";
import ModalTwo from "../modalExamples/modalTwo";
import ModalThree from "../modalExamples/modalThree";
import { AppFooter } from "../app-footer/app-footer";
import VolunteerPage from "../../pages/VolunteerPage/VolunteerPage";
import { RecipientPage } from "../../pages/recipient/recipient";


function App() {
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<TestPage />} />
        <Route path="/anotherTestPage" element={<AnotherTestPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/recipient" element={<RecipientPage />} />
        {/*добавить нужные роуты*/}
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/modalOne"
            element={
              <Modal onClose={() => navigate(-1)} isModalOpened>
                <ModalOne />
              </Modal>
            }
          />
          <Route
            path="/modalTwo"
            element={
              <Modal onClose={() => navigate("/")} isModalOpened>
                <ModalTwo />
              </Modal>
            }
          />
          <Route
            path="/modalThree"
            element={
              <Modal onClose={() => navigate("/")} isModalOpened>
                <ModalThree />
              </Modal>
            }
          />
        </Routes>
      )}
      <AppFooter />
    </div>
  );
}

export default App;
