import type { endoflifeGoaccessRoute } from "./route";
import type { GetGoaccessResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGoaccessHandler: RouteHandler<
  typeof endoflifeGoaccessRoute
> = async (c) => {
  const goaccessInfoResponse = await fetch(
    "https://endoflife.date/api/goaccess.json",
  );
  const goaccessInfo = (await goaccessInfoResponse.json()) as z.infer<
    typeof GetGoaccessResponse200Schema
  >;
  return c.json(goaccessInfo, 200);
};
