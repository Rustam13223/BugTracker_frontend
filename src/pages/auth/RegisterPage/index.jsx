import React, { useState } from "react";
import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import RegisterForm from "@/components/forms/RegisterForm";
import FadeIn from "@/components/animations/FadeIn";

const RegisterPage = () => {
  return (
    <FadeIn>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </FadeIn>
  );
};

export default RegisterPage;
