import type { endoflifeNexusRoute } from "./route";
import type { GetNexusResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNexusHandler: RouteHandler<
  typeof endoflifeNexusRoute
> = async (c) => {
  const nexusInfoResponse = await fetch(
    "https://endoflife.date/api/nexus.json",
  );
  const nexusInfo = (await nexusInfoResponse.json()) as z.infer<
    typeof GetNexusResponse200Schema
  >;
  return c.json(nexusInfo, 200);
};
