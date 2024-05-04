import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Dashboard from "./pages/Dashboard/index";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import LoginPage from "./pages/auth/LoginPage/index";
import RegisterPage from "./pages/auth/RegisterPage/index";
import LandingPage from "./pages/LandingPage/index";
import SubmitIssuePage from "./pages/SubmitIssuePage/index";
import IssuesPage from "./pages/IssuesPage";
import StatisticsPage from "./pages/StatisticsPage";
import UsersPage from "./pages/UsersPage";
import SingleIssuePage from "./pages/SingleIssuePage/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserProvider } from "./context/userContext";
import { UsersProvider } from "./context/usersContext";
import { IssuesProvider } from "./context/issuesContext";

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
        <Route path="/all-issues" element={<MainLayout />}>
          <Route index element={<IssuesPage />} />
        </Route>
        <Route path="/stats" element={<MainLayout />}>
          <Route index element={<StatisticsPage />} />
        </Route>
        <Route path="/users" element={<MainLayout />}>
          <Route index element={<UsersPage />} />
        </Route>
        <Route path="/submit" element={<MainLayout />}>
          <Route index element={<SubmitIssuePage />} />
        </Route>
        <Route path="/issue/:issueId" element={<MainLayout />}>
          <Route index element={<SingleIssuePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <UserProvider>
      <IssuesProvider>
        <UsersProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </UsersProvider>
      </IssuesProvider>
    </UserProvider>
  );
}

export default App;
