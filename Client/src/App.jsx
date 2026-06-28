import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
import IncomePage from "./Pages/IncomePage";
import ExpensePage from "./Pages/ExpensePage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* https://tracker-expense-vercel-frontend.vercel.app/ */}
      {/* * <LoginPage />  */}
      {/* <RegisterPage />  */}
      {/* <DashboardPage /> */}
      <IncomePage />
      <ExpensePage />
      {/* <ProfilePage /> */}
    </>
  );
}

export default App;
