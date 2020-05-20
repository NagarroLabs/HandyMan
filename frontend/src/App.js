import React from "react";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import EditProfilePage from "./components/EditProfilePage";

function App() {
  return (
    <div className="RegisterLoginPage">
      {/* <RegisterPage /> */}
      <LoginPage />
    </div>
    // <div className="EditProfilePage">
    //   <EditProfilePage />
    // </div>
  );
}

export default App;
