import { Project, User } from "@/generated/prisma";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "../ui/sidebar";
import { Sidebar } from "../ui/sidebar";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

type SideBarProps = {
  recentProjects: Project[];
  user: User;
  props: React.ComponentProps<typeof Sidebar>;
};

const AppSidebar = async ({ recentProjects, user, ...props }: SideBarProps) => {
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-[212px] bg-background-90"
      {...props}
    >
      <SidebarHeader className="pt-6 px-3 pb-0">
        <SidebarMenuButton
          size={"lg"}
          className="data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Avatar>
              <AvatarImage src={"./logo.png"} />
              <AvatarFallback className="rounded-lg">Aiko </AvatarFallback>
            </Avatar>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
