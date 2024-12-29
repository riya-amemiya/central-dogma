import type { endoflifeTailsRoute } from "./route";
import type { GetTailsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTailsHandler: RouteHandler<
  typeof endoflifeTailsRoute
> = async (c) => {
  const tailsInfoResponse = await fetch(
    "https://endoflife.date/api/tails.json",
  );
  const tailsInfo = (await tailsInfoResponse.json()) as z.infer<
    typeof GetTailsResponse200Schema
  >;
  return c.json(tailsInfo, 200);
};
