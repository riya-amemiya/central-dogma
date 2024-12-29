import type { endoflifeKirbyRoute } from "./route";
import type { GetKirbyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKirbyHandler: RouteHandler<
  typeof endoflifeKirbyRoute
> = async (c) => {
  const kirbyInfoResponse = await fetch(
    "https://endoflife.date/api/kirby.json",
  );
  const kirbyInfo = (await kirbyInfoResponse.json()) as z.infer<
    typeof GetKirbyResponse200Schema
  >;
  return c.json(kirbyInfo, 200);
};
