import type { endoflifeRedmineRoute } from "./route";
import type { GetRedmineResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRedmineHandler: RouteHandler<
  typeof endoflifeRedmineRoute
> = async (c) => {
  const redmineInfoResponse = await fetch(
    "https://endoflife.date/api/redmine.json",
  );
  const redmineInfo = (await redmineInfoResponse.json()) as z.infer<
    typeof GetRedmineResponse200Schema
  >;
  return c.json(redmineInfo, 200);
};
