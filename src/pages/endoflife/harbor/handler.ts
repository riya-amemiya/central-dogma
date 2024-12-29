import type { endoflifeHarborRoute } from "./route";
import type { GetHarborResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeHarborHandler: RouteHandler<
  typeof endoflifeHarborRoute
> = async (c) => {
  const harborInfoResponse = await fetch(
    "https://endoflife.date/api/harbor.json",
  );
  const harborInfo = (await harborInfoResponse.json()) as z.infer<
    typeof GetHarborResponse200Schema
  >;
  return c.json(harborInfo, 200);
};
