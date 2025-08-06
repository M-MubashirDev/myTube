import { db } from "@/db";
import { users } from "@/db/schema";

export async function GET(req: Request) {
  console.log("testing the db connection", req.url);
  await db.insert(users).values({
    clerkId: "test-clerk-id",
    name: "Test User",
    imageUrl: "https://example.com/test-user.jpg",
  });
  new Response("Database connection successful and user inserted", {
    status: 200,
  });
}
