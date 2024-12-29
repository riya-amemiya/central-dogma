import type { endoflifeCosRoute } from "./route";
import type { GetCosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCosHandler: RouteHandler<
  typeof endoflifeCosRoute
> = async (c) => {
  const cosInfoResponse = await fetch("https://endoflife.date/api/cos.json");
  const cosInfo = (await cosInfoResponse.json()) as z.infer<
    typeof GetCosResponse200Schema
  >;
  return c.json(cosInfo, 200);
};
