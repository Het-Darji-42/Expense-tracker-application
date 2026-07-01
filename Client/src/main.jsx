import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { store } from "./Redux/store.js";
import { Provider } from "react-redux";

import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import DashboardLayout from "./Component/DashboardLayout.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import IncomePage from "./Pages/IncomePage.jsx";
import ExpensePage from "./Pages/ExpensePage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import UserLayout from "./Layout/UserLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="expense" element={<ExpensePage />} />
        <Route path="income" element={<IncomePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
