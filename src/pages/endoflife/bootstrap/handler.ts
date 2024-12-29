import type { endoflifeBootstrapRoute } from "./route";
import type { GetBootstrapResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeBootstrapHandler: RouteHandler<
  typeof endoflifeBootstrapRoute
> = async (c) => {
  const bootstrapInfoResponse = await fetch(
    "https://endoflife.date/api/bootstrap.json",
  );
  const bootstrapInfo = (await bootstrapInfoResponse.json()) as z.infer<
    typeof GetBootstrapResponse200Schema
  >;
  return c.json(bootstrapInfo, 200);
};
