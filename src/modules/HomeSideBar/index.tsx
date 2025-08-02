import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "./mainSection";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./personalSection";

export function HomeSidebar() {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
}
