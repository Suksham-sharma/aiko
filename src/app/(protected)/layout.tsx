import { onAuthenticatedUser } from "@/actions/user";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const auth = await onAuthenticatedUser();
  if (!auth.user) redirect("/sign-in");

  return <div className="w-full min-h-screen">{children}</div>;
};

export default Layout;
