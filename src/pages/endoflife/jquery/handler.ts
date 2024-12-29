import type { endoflifeJqueryRoute } from "./route";
import type { GetJqueryResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJqueryHandler: RouteHandler<
  typeof endoflifeJqueryRoute
> = async (c) => {
  const jqueryInfoResponse = await fetch(
    "https://endoflife.date/api/jquery.json",
  );
  const jqueryInfo = (await jqueryInfoResponse.json()) as z.infer<
    typeof GetJqueryResponse200Schema
  >;
  return c.json(jqueryInfo, 200);
};
