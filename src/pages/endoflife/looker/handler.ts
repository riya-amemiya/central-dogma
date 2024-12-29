import type { endoflifeLookerRoute } from "./route";
import type { GetLookerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLookerHandler: RouteHandler<
  typeof endoflifeLookerRoute
> = async (c) => {
  const lookerInfoResponse = await fetch(
    "https://endoflife.date/api/looker.json",
  );
  const lookerInfo = (await lookerInfoResponse.json()) as z.infer<
    typeof GetLookerResponse200Schema
  >;
  return c.json(lookerInfo, 200);
};
