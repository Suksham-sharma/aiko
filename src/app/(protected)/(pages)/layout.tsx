import { onAuthenticatedUser } from "@/actions/user";
import AppSidebar from "@/components/global/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const auth = await onAuthenticatedUser();

  if (!auth.user) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <AppSidebar user={auth.user} recentProjects={auth.user.projects}>
        {children}
      </AppSidebar>
    </SidebarProvider>
  );
};

export default Layout;
