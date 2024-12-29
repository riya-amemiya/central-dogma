import type { endoflifeLaravelRoute } from "./route";
import type { GetLaravelResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLaravelHandler: RouteHandler<
  typeof endoflifeLaravelRoute
> = async (c) => {
  const laravelInfoResponse = await fetch(
    "https://endoflife.date/api/laravel.json",
  );
  const laravelInfo = (await laravelInfoResponse.json()) as z.infer<
    typeof GetLaravelResponse200Schema
  >;
  return c.json(laravelInfo, 200);
};
