import type { endoflifeRhelRoute } from "./route";
import type { GetRhelResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRhelHandler: RouteHandler<
  typeof endoflifeRhelRoute
> = async (c) => {
  const rhelInfoResponse = await fetch("https://endoflife.date/api/rhel.json");
  const rhelInfo = (await rhelInfoResponse.json()) as z.infer<
    typeof GetRhelResponse200Schema
  >;
  return c.json(rhelInfo, 200);
};
