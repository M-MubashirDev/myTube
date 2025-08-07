import { db } from "@/db";
import { users } from "@/db/schema";
// import { rateLimit } from "@/lib/ratelimit";
import { auth } from "@clerk/nextjs/server";
import { initTRPC } from "@trpc/server";
import { eq } from "drizzle-orm";
import { cache } from "react";
import superjson from "superjson";

// Initialize tRPC context with Clerk user ID all will use this middleware
export const createTRPCContext = cache(async () => {
  const { userId } = await auth();
  return { clearkUserId: userId };
});
export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

// Middleware to check if the user is authenticated
export const protectedProcedure = t.procedure.use(async (otp) => {
  const { ctx } = otp;
  if (!ctx.clearkUserId) {
    throw new Error("Unauthorized");
  }
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, ctx.clearkUserId))
    .limit(1);
  // if (!user) {
  //   throw new Error("Unauthorized");
  // }

  // const { success } = await rateLimit.limit(ctx.clearkUserId);

  // if (!success) {
  //   throw new Error("Rate limit exceeded");
  // }
  return otp.next({
    ctx: {
      ...ctx,
      user,
    },
  });
});
