import type { endoflifeGhcRoute } from "./route";
import type { GetGhcResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGhcHandler: RouteHandler<
  typeof endoflifeGhcRoute
> = async (c) => {
  const ghcInfoResponse = await fetch("https://endoflife.date/api/ghc.json");
  const ghcInfo = (await ghcInfoResponse.json()) as z.infer<
    typeof GetGhcResponse200Schema
  >;
  return c.json(ghcInfo, 200);
};
