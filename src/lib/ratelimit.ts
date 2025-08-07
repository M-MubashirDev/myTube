// rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit"; // Note: Correct package name is "ratelimit" (lowercase 'l')
import { redis } from "./redis"; // Adjust the import path as necessary
export const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "10 s"), // Space between number and unit
});
