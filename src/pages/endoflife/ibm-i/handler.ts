import type { endoflifeIbmIRoute } from "./route";
import type { GetIbmIResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIbmIHandler: RouteHandler<
  typeof endoflifeIbmIRoute
> = async (c) => {
  const ibmIInfoResponse = await fetch("https://endoflife.date/api/ibm-i.json");
  const ibmIInfo = (await ibmIInfoResponse.json()) as z.infer<
    typeof GetIbmIResponse200Schema
  >;
  return c.json(ibmIInfo, 200);
};
