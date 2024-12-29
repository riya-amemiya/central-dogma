import type { endoflifePangpRoute } from "./route";
import type { GetPangpResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePangpHandler: RouteHandler<
  typeof endoflifePangpRoute
> = async (c) => {
  const pangpInfoResponse = await fetch(
    "https://endoflife.date/api/pangp.json",
  );
  const pangpInfo = (await pangpInfoResponse.json()) as z.infer<
    typeof GetPangpResponse200Schema
  >;
  return c.json(pangpInfo, 200);
};
