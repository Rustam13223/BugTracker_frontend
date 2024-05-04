import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import LoginForm from "@/components/forms/LoginForm";
import FadeIn from "@/components/animations/FadeIn";
import { useUserContext } from "@/context/userContext";
import Authenticated from "../../../components/redirects/Authenticated/Authenticated";

const LoginPage = () => {
  const { user } = useUserContext();
  return (
    <FadeIn>
      <AuthLayout page="login">
        {user ? <Authenticated /> : <LoginForm />}
      </AuthLayout>
    </FadeIn>
  );
};

export default LoginPage;
