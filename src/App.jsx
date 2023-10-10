import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import LoginError from "./component/LoginError";
import UserPage from "./component/UserPage";
import ResetPassword from "./component/ResetPassword";
import Registration from "./component/Registration";
import RegistrationPage from "./component/RegistrationPage";
import { Provider } from "react-redux";
import { store } from "./features/logStore";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Registration />} />
            <Route path="/registerMessage" element={<RegistrationPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="*" element={<LoginError />} />
          </Routes>
        </Provider>
      </div>
    </>
  );
}

export default App;
