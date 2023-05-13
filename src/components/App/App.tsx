import "./App.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import TestPage from "../../pages/testPage";
import PersonalPage from "../../pages/PersonalPage/PersonalPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import SigninPage from "../../pages/SigninPage/SigninPage";
import { AppHeader } from "../AppHeader/AppHeader";
import Modal from "../modal1/Modal";
import { AppFooter } from "../AppFooter/AppFooter";
import VolunteerPage from "../../pages/VolunteerPage/VolunteerPage";
import { RecipientPage } from "../../pages/RecipientPage/RecipientPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { AdminPage } from "../../pages/AdminPage/AdminPage";
import { AdminPageConfirmation } from "../../pages/AdminPage/AdminPageConfirmation";

import { RecipientPageActive } from "../../pages/RecipientPage/RecipientPageActive";
import { RecipientPageCompleted } from "../../pages/RecipientPage/RecipientPageCompleted";
import { EPageTitleFilterKind } from "../PageTitleFilter/types";
import { MainAdminPage } from "../../pages/MainAdminPage/MainAdminPage";
import { AdminPageCreateEdit } from "../../pages/AdminPage/AdminPageCreateEdit";
import { AdminPageStatistics } from "../../pages/AdminPage/AdminPageStatistics";
import FirstStep from "../TaskForm/FirstStep/FirstStep";
import SecondStep from "../TaskForm/SecondStep/SecondStep";
import ThirdStep from "../TaskForm/ThirdStep/ThirdStep";
import ConfirmStep from "../TaskForm/ConfirmStep/ConfirmStep";

function App() {
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();


  return (
    <div className="App">
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<TestPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/activeVolunteer" element={<VolunteerPage current={EPageTitleFilterKind.Active} />} />
        <Route path="/volunteer" element={<VolunteerPage current={EPageTitleFilterKind.Active} />} />
        <Route path="/mapVolunteer" element={<VolunteerPage current={EPageTitleFilterKind.Map} />} />
        <Route path="/completedVolunteer" element={<VolunteerPage current={EPageTitleFilterKind.Completed} />} />
        <Route path="/recipient" element={<RecipientPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/approve" element={<AdminPageConfirmation />} />
        <Route path="/statistics" element={<AdminPageStatistics />} />
        <Route path="/create" element={<AdminPageCreateEdit />} />
        <Route path="/mainadmin" element={<MainAdminPage />} />
        <Route path="/completed" element={<RecipientPageCompleted />} />
        <Route path="/active" element={<RecipientPageActive />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/*добавить нужные роуты*/}
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/firstStep"
            element={
              <Modal onClose={() => navigate(-1)} isModalOpened>
                <FirstStep />
              </Modal>
            }
          />
          <Route
            path="/secondStep"
            element={
              <Modal onClose={() => navigate("/")} isModalOpened>
                <SecondStep />
              </Modal>
            }
          />
          <Route
            path="/thirdStep"
            element={
              <Modal onClose={() => navigate("/")} isModalOpened>
                <ThirdStep />
              </Modal>
            }
          />
          <Route
            path="/confirmStep"
            element={
              <Modal onClose={() => navigate("/")} isModalOpened>
                <ConfirmStep />
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
