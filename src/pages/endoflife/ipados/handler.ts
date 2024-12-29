import type { endoflifeIpadosRoute } from "./route";
import type { GetIpadosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIpadosHandler: RouteHandler<
  typeof endoflifeIpadosRoute
> = async (c) => {
  const ipadosInfoResponse = await fetch(
    "https://endoflife.date/api/ipados.json",
  );
  const ipadosInfo = (await ipadosInfoResponse.json()) as z.infer<
    typeof GetIpadosResponse200Schema
  >;
  return c.json(ipadosInfo, 200);
};
