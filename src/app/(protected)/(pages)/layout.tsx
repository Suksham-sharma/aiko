import { SidebarProvider } from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Layout;
