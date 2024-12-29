import type { endoflifeForgejoRoute } from "./route";
import type { GetForgejoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeForgejoHandler: RouteHandler<
  typeof endoflifeForgejoRoute
> = async (c) => {
  const forgejoInfoResponse = await fetch(
    "https://endoflife.date/api/forgejo.json",
  );
  const forgejoInfo = (await forgejoInfoResponse.json()) as z.infer<
    typeof GetForgejoResponse200Schema
  >;
  return c.json(forgejoInfo, 200);
};
