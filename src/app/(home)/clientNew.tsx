"use client";

import { trpc } from "@/trpc/client";

function ClientNew() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "mubashir" });
  console.log("data", data);
  return <div>page ClientNew says:{data.greeting}</div>;
}

export default ClientNew;
