"use client";

import { trpc } from "@/trpc/client";

function Client() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "mubashir" });
  console.log("data", data);
  return <div>page Client says:{data.greeting}</div>;
}

export default Client;
