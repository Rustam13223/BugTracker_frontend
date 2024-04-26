import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IssuesPage from "./pages/IssuesPage";
import IssuePage from "./pages/IssuePage";
import SubmitIssuePage from "./pages/SubmitIssuePage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import { Typography } from "@mui/joy";
import ApiService from "./services/ApiService";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });
  const [authorised, setAuthorised] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function checkAuth() {
      setIsLoading(true);

      const res = await ApiService.getIssues();

      if (res == 500) {
        setAuthorised(false);
        setIsLoading(false);
        return;
      }
      setUserData((prev) => {
        return { ...prev, ...JSON.parse(localStorage.getItem("userData")) };
      });
      setAuthorised(true);

      setIsLoading(false);
    }

    checkAuth();
  }, [authorised]);

  if (isLoading) {
    return (
      <>
        <Typography level="h1">Loading...</Typography>
      </>
    );
  }
  if (!authorised) {
    return (
      <>
        <NavBar
          userData={userData}
          authorised={authorised}
          setAuthorised={setAuthorised}
        />
        <LoginPage userData={userData} setAuthorised={setAuthorised} />
      </>
    );
  }
  return (
    <>
      <NavBar
        userData={userData}
        authorised={authorised}
        setAuthorised={setAuthorised}
      />
      <Routes>
        <Route path="/" element={<HomePage userData={userData} />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/issues/:issueId" element={<IssuePage />} />
        <Route path="/report" element={<SubmitIssuePage />} />
      </Routes>
    </>
  );
}

export default App;
