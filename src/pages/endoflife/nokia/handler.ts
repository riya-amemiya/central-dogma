import type { endoflifeNokiaRoute } from "./route";
import type { GetNokiaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNokiaHandler: RouteHandler<
  typeof endoflifeNokiaRoute
> = async (c) => {
  const nokiaInfoResponse = await fetch(
    "https://endoflife.date/api/nokia.json",
  );
  const nokiaInfo = (await nokiaInfoResponse.json()) as z.infer<
    typeof GetNokiaResponse200Schema
  >;
  return c.json(nokiaInfo, 200);
};
