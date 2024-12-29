import type { endoflifeEnvoyRoute } from "./route";
import type { GetEnvoyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEnvoyHandler: RouteHandler<
  typeof endoflifeEnvoyRoute
> = async (c) => {
  const envoyInfoResponse = await fetch(
    "https://endoflife.date/api/envoy.json",
  );
  const envoyInfo = (await envoyInfoResponse.json()) as z.infer<
    typeof GetEnvoyResponse200Schema
  >;
  return c.json(envoyInfo, 200);
};
