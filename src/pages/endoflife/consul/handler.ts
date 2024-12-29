import type { endoflifeConsulRoute } from "./route";
import type { GetConsulResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeConsulHandler: RouteHandler<
  typeof endoflifeConsulRoute
> = async (c) => {
  const consulInfoResponse = await fetch(
    "https://endoflife.date/api/consul.json",
  );
  const consulInfo = (await consulInfoResponse.json()) as z.infer<
    typeof GetConsulResponse200Schema
  >;
  return c.json(consulInfo, 200);
};
