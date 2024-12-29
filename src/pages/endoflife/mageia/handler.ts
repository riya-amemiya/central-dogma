import type { endoflifeMageiaRoute } from "./route";
import type { GetMageiaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMageiaHandler: RouteHandler<
  typeof endoflifeMageiaRoute
> = async (c) => {
  const mageiaInfoResponse = await fetch(
    "https://endoflife.date/api/mageia.json",
  );
  const mageiaInfo = (await mageiaInfoResponse.json()) as z.infer<
    typeof GetMageiaResponse200Schema
  >;
  return c.json(mageiaInfo, 200);
};
