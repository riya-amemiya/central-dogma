import type { endoflifeIbmAixRoute } from "./route";
import type { GetIbmAixResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIbmAixHandler: RouteHandler<
  typeof endoflifeIbmAixRoute
> = async (c) => {
  const ibmAixInfoResponse = await fetch(
    "https://endoflife.date/api/ibm-aix.json",
  );
  const ibmAixInfo = (await ibmAixInfoResponse.json()) as z.infer<
    typeof GetIbmAixResponse200Schema
  >;
  return c.json(ibmAixInfo, 200);
};
