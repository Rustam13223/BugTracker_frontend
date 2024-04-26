/* eslint-disable react/prop-types */
import AuthService from "../../services/AuthService";
import { useState, useRef } from "react";
import { Button, Container, Input, Typography, Link } from "@mui/joy";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginPage({ setAuthorised }) {
  const [registered, setRegistered] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [token, setToken] = useState("");

  const captchaRef = useRef(null);
  const captchaSitekey = "6Lciu8IpAAAAAD6gM2Ea6E3tS2zqb9c2QnTLlDz6";

  if (registered) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "200px",
          justifyContent: "space-between",
          marginTop: "300px",
        }}
      >
        <Typography level="h3">Log in</Typography>

        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          style={{ margin: "10px 0" }}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          style={{ margin: "10px 0" }}
        />
        <ReCAPTCHA
          onChange={(value) => setToken(value)}
          sitekey={captchaSitekey}
          ref={captchaRef}
        />
        <Button
          onClick={() =>
            AuthService.login(email, password, token, setAuthorised)
          }
        >
          Log in
        </Button>
        <Link onClick={() => setRegistered(false)}>Registration</Link>
      </Container>
    );
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "200px",
        justifyContent: "space-between",
        marginTop: "300px",
      }}
    >
      <Typography level="h3">Registration</Typography>
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="first name"
        style={{ margin: "10px 0" }}
      />
      <Input
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        placeholder="second name"
        style={{ margin: "10px 0" }}
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        style={{ margin: "10px 0" }}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        style={{ margin: "10px 0" }}
      />
      <Input
        type="password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        placeholder="repeat password"
        style={{ margin: "10px 0" }}
      />
      <ReCAPTCHA
        onChange={(value) => setToken(value)}
        sitekey={captchaSitekey}
        ref={captchaRef}
      />
      <Button
        onClick={() =>
          AuthService.registration(
            firstName,
            secondName,
            email,
            password,
            repeatPassword,
            token,
            setAuthorised
          )
        }
      >
        Register
      </Button>
      <Link onClick={() => setRegistered(true)}>Log in</Link>
    </Container>
  );
}
