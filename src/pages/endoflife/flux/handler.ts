import type { endoflifeFluxRoute } from "./route";
import type { GetFluxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFluxHandler: RouteHandler<
  typeof endoflifeFluxRoute
> = async (c) => {
  const fluxInfoResponse = await fetch("https://endoflife.date/api/flux.json");
  const fluxInfo = (await fluxInfoResponse.json()) as z.infer<
    typeof GetFluxResponse200Schema
  >;
  return c.json(fluxInfo, 200);
};
