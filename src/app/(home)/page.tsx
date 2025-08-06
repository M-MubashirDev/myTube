import { trpc } from "@/trpc/server";
import ClientNew from "./clientNew";

export default async function Home() {
  void trpc.hello.prefetch({ text: "mubashir" });
  return (
    <div>
      <ClientNew />
      <div>Home Page</div>
    </div>
  );
}
