import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Dashboard from "./pages/Dashboard/index";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import LoginPage from "./pages/auth/LoginPage/index";
import RegisterPage from "./pages/auth/RegisterPage/index";
import LandingPage from "./pages/LandingPage/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserProvider } from "./context/userContext";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
