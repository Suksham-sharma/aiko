import {
  HomeIcon,
  LayoutTemplateIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react";

export const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Template",
      url: "/template",
      icon: LayoutTemplateIcon,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: TrashIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
};
