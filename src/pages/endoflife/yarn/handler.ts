import type { endoflifeYarnRoute } from "./route";
import type { GetYarnResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeYarnHandler: RouteHandler<
  typeof endoflifeYarnRoute
> = async (c) => {
  const yarnInfoResponse = await fetch("https://endoflife.date/api/yarn.json");
  const yarnInfo = (await yarnInfoResponse.json()) as z.infer<
    typeof GetYarnResponse200Schema
  >;
  return c.json(yarnInfo, 200);
};
