import type { endoflifeSilverstripeRoute } from "./route";
import type { GetSilverstripeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSilverstripeHandler: RouteHandler<
  typeof endoflifeSilverstripeRoute
> = async (c) => {
  const silverstripeInfoResponse = await fetch(
    "https://endoflife.date/api/silverstripe.json",
  );
  const silverstripeInfo = (await silverstripeInfoResponse.json()) as z.infer<
    typeof GetSilverstripeResponse200Schema
  >;
  return c.json(silverstripeInfo, 200);
};
