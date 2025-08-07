import HomeView from "@/modules/home/ui/views/HomeView";
import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";
export const dynamic = "force-dynamic";
export default async function Home() {
  void trpc.categories.getMany.prefetch();
  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  );
}
