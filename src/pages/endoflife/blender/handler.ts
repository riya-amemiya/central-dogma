import type { endoflifeBlenderRoute } from "./route";
import type { GetBlenderResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeBlenderHandler: RouteHandler<
  typeof endoflifeBlenderRoute
> = async (c) => {
  const blenderInfoResponse = await fetch(
    "https://endoflife.date/api/blender.json",
  );
  const blenderInfo = (await blenderInfoResponse.json()) as z.infer<
    typeof GetBlenderResponse200Schema
  >;
  return c.json(blenderInfo, 200);
};
