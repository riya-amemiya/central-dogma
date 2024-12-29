import type { endoflifeApacheHopRoute } from "./route";
import type { GetApacheHopResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheHopHandler: RouteHandler<
  typeof endoflifeApacheHopRoute
> = async (c) => {
  const apacheHopInfoResponse = await fetch(
    "https://endoflife.date/api/apache-hop.json",
  );
  const apacheHopInfo = (await apacheHopInfoResponse.json()) as z.infer<
    typeof GetApacheHopResponse200Schema
  >;
  return c.json(apacheHopInfo, 200);
};
