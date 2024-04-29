import React from "react";
import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import LoginForm from "@/components/forms/LoginForm";
import FadeIn from "@/components/animations/FadeIn";

const LoginPage = () => {
  return (
    <FadeIn>
      <AuthLayout page="login">
        <LoginForm />
      </AuthLayout>
    </FadeIn>
  );
};

export default LoginPage;
