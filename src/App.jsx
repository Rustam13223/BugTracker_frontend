import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import LoginPage from "./pages/auth/LoginPage/index";
import RegisterPage from "./pages/auth/RegisterPage/index";
import { ThemeProvider } from "./context/themeContext";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
