import type { endoflifeGoRoute } from "./route";
import type { GetGoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGoHandler: RouteHandler<typeof endoflifeGoRoute> = async (
  c,
) => {
  const goInfoResponse = await fetch("https://endoflife.date/api/go.json");
  const goInfo = (await goInfoResponse.json()) as z.infer<
    typeof GetGoResponse200Schema
  >;
  return c.json(goInfo, 200);
};
