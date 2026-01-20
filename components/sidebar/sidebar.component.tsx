"use client";

import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

import { Icon } from "../ui";
import { SideBarItemStyle, SidebarStyle } from "./styles";

type Item = {
  title: string;
  icon: ComponentProps<typeof Icon>["name"];
  pathname: string;
};

const items: Item[] = [
  { title: "Dashboard", icon: "layout-dashboard", pathname: "/" },
  { title: "Produtos", icon: "git-pull-request-closed", pathname: "/products" },
  { title: "Usuários", icon: "user", pathname: "/users" },
  { title: "Configurações", icon: "settings", pathname: "/settings" },
] as const;

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <SidebarStyle>
      {items.map((item, index) => (
        <SideBarItemStyle
          key={index}
          href={item.pathname}
          data-active={pathname === item.pathname}
        >
          <Icon name={item.icon} />
          {item.title}
        </SideBarItemStyle>
      ))}
    </SidebarStyle>
  );
};
