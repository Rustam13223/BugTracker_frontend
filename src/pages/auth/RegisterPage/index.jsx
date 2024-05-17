import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import RegisterForm from "@/components/forms/RegisterForm";
import FadeIn from "@/components/animations/FadeIn";
import { useUserContext } from "@/context/userContext";
import Authenticated from "../../../components/redirects/Authenticated/Authenticated";

/**
 * Renders the RegisterPage component.
 *
 * @returns {JSX.Element} The rendered RegisterPage component.
 */
const RegisterPage = () => {
  const { user } = useUserContext();
  return (
    <FadeIn>
      <AuthLayout>{user ? <Authenticated /> : <RegisterForm />}</AuthLayout>
    </FadeIn>
  );
};

export default RegisterPage;
