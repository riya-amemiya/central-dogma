import type { endoflifeLineageosRoute } from "./route";
import type { GetLineageosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLineageosHandler: RouteHandler<
  typeof endoflifeLineageosRoute
> = async (c) => {
  const lineageosInfoResponse = await fetch(
    "https://endoflife.date/api/lineageos.json",
  );
  const lineageosInfo = (await lineageosInfoResponse.json()) as z.infer<
    typeof GetLineageosResponse200Schema
  >;
  return c.json(lineageosInfo, 200);
};
