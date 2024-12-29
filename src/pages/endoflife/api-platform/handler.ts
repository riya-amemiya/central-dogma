import type { endoflifeApiPlatformRoute } from "./route";
import type { GetApiPlatformResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApiPlatformHandler: RouteHandler<
  typeof endoflifeApiPlatformRoute
> = async (c) => {
  const apiPlatformInfoResponse = await fetch(
    "https://endoflife.date/api/api-platform.json",
  );
  const apiPlatformInfo = (await apiPlatformInfoResponse.json()) as z.infer<
    typeof GetApiPlatformResponse200Schema
  >;
  return c.json(apiPlatformInfo, 200);
};
