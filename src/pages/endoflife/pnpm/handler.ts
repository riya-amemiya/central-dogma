import type { endoflifePnpmRoute } from "./route";
import type { GetPnpmResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePnpmHandler: RouteHandler<
  typeof endoflifePnpmRoute
> = async (c) => {
  const pnpmInfoResponse = await fetch("https://endoflife.date/api/pnpm.json");
  const pnpmInfo = (await pnpmInfoResponse.json()) as z.infer<
    typeof GetPnpmResponse200Schema
  >;
  return c.json(pnpmInfo, 200);
};
