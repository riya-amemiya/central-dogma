import type { endoflifeDrupalRoute } from "./route";
import type { GetDrupalResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDrupalHandler: RouteHandler<
  typeof endoflifeDrupalRoute
> = async (c) => {
  const drupalInfoResponse = await fetch(
    "https://endoflife.date/api/drupal.json",
  );
  const drupalInfo = (await drupalInfoResponse.json()) as z.infer<
    typeof GetDrupalResponse200Schema
  >;
  return c.json(drupalInfo, 200);
};
