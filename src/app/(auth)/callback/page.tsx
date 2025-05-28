import { onAuthenticatedUser } from "@/actions/user";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const { status } = await onAuthenticatedUser();

  if (status === 200 || status === 201) {
    redirect("/dashboard");
  } else if (status === 403 || status === 400 || status === 500) {
    redirect("/auth/sign-in");
  }
};

export default AuthCallbackPage;
