import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export function Authbutton() {
  return (
    <Button
      variant="outline"
      className="py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none px-4"
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
}
