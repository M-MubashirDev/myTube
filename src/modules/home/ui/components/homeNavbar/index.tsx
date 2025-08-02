import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { Authbutton } from "@/modules/auth/ui/component/auth-button";
export function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16  items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0 ">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Image src="/logo.svg" height={50} width={50} alt="logo" />
              <p className="text-xl font-semibold tracking-tight">NewTube</p>
            </div>
          </Link>
        </div>
        <div className="flex-1 flex judge-center  max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        <div className="flex-shrink-0 items-center flex gap-4">
          <Authbutton />
        </div>
      </div>
    </nav>
  );
}
