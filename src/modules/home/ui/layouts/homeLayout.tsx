import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { HomeNavbar } from "../components/homeNavbar";
import { HomeSidebar } from "@/modules/HomeSideBar";

interface HomelayoutProps {
  children: React.ReactNode;
}
export function HomeLayout({ children }: HomelayoutProps) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
