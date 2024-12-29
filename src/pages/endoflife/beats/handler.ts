import type { endoflifeBeatsRoute } from "./route";
import type { GetBeatsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeBeatsHandler: RouteHandler<
  typeof endoflifeBeatsRoute
> = async (c) => {
  const beatsInfoResponse = await fetch(
    "https://endoflife.date/api/beats.json",
  );
  const beatsInfo = (await beatsInfoResponse.json()) as z.infer<
    typeof GetBeatsResponse200Schema
  >;
  return c.json(beatsInfo, 200);
};
