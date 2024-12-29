import type { endoflifeSharepointRoute } from "./route";
import type { GetSharepointResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSharepointHandler: RouteHandler<
  typeof endoflifeSharepointRoute
> = async (c) => {
  const sharepointInfoResponse = await fetch(
    "https://endoflife.date/api/sharepoint.json",
  );
  const sharepointInfo = (await sharepointInfoResponse.json()) as z.infer<
    typeof GetSharepointResponse200Schema
  >;
  return c.json(sharepointInfo, 200);
};
