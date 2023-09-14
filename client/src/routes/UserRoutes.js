import { Route, Routes } from "react-router-dom";
import { UserRegistration } from "../components/UserRegisteration";
import { AllUsers } from "../components/AllUsers";
import { Navbar } from "../components/Navbar";

export const UserRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={UserRegistration}></Route>
        <Route path="/userslist" Component={AllUsers}></Route>
      </Routes>
    </div>
  );
};
