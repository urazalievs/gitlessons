import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import {RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SContainer } from "./themes/Container.style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PasswordErrore from "./pages/PasswordError/PasswordError";

function App() {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/profile-page",
      element: <ProfilePage />,
    },
    {
      path: "/register-page",
      element: <RegistrationPage />,
    },
    {
      path:"/password-error",
      element:<PasswordErrore/>
    }
  ]);
  return (
    <SContainer>
      <RouterProvider router={routerConfig} />
    </SContainer>
  );
}

export default App;
