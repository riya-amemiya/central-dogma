import type { endoflifeIcingaWebRoute } from "./route";
import type { GetIcingaWebResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIcingaWebHandler: RouteHandler<
  typeof endoflifeIcingaWebRoute
> = async (c) => {
  const icingaWebInfoResponse = await fetch(
    "https://endoflife.date/api/icinga-web.json",
  );
  const icingaWebInfo = (await icingaWebInfoResponse.json()) as z.infer<
    typeof GetIcingaWebResponse200Schema
  >;
  return c.json(icingaWebInfo, 200);
};
