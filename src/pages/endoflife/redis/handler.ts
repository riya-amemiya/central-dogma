import type { endoflifeRedisRoute } from "./route";
import type { GetRedisResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRedisHandler: RouteHandler<
  typeof endoflifeRedisRoute
> = async (c) => {
  const redisInfoResponse = await fetch(
    "https://endoflife.date/api/redis.json",
  );
  const redisInfo = (await redisInfoResponse.json()) as z.infer<
    typeof GetRedisResponse200Schema
  >;
  return c.json(redisInfo, 200);
};
