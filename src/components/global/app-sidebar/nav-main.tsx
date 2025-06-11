"use client";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  items: {
    title: string;
    url: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
};

const NavMain = ({ items }: Props) => {
  const pathname = usePathname();
  return (
    <SidebarGroup className="p-0 ">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip={"Test"}
            className={`${pathname.includes("test") && "bg-background-80"} `}
          >
            <Link
              href={"test"}
              className={`text-lg ${pathname.includes("test") && "font-bold"}`}
            >
              <Clock className="size-5" />
              <span className="text-sm">Test Item</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
