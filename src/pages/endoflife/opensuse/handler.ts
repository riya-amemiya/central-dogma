import type { endoflifeOpensuseRoute } from "./route";
import type { GetOpensuseResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpensuseHandler: RouteHandler<
  typeof endoflifeOpensuseRoute
> = async (c) => {
  const opensuseInfoResponse = await fetch(
    "https://endoflife.date/api/opensuse.json",
  );
  const opensuseInfo = (await opensuseInfoResponse.json()) as z.infer<
    typeof GetOpensuseResponse200Schema
  >;
  return c.json(opensuseInfo, 200);
};
