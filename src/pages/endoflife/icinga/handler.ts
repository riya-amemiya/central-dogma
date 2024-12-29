import type { endoflifeIcingaRoute } from "./route";
import type { GetIcingaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIcingaHandler: RouteHandler<
  typeof endoflifeIcingaRoute
> = async (c) => {
  const icingaInfoResponse = await fetch(
    "https://endoflife.date/api/icinga.json",
  );
  const icingaInfo = (await icingaInfoResponse.json()) as z.infer<
    typeof GetIcingaResponse200Schema
  >;
  return c.json(icingaInfo, 200);
};
