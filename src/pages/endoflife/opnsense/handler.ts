import type { endoflifeOpnsenseRoute } from "./route";
import type { GetOpnsenseResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpnsenseHandler: RouteHandler<
  typeof endoflifeOpnsenseRoute
> = async (c) => {
  const opnsenseInfoResponse = await fetch(
    "https://endoflife.date/api/opnsense.json",
  );
  const opnsenseInfo = (await opnsenseInfoResponse.json()) as z.infer<
    typeof GetOpnsenseResponse200Schema
  >;
  return c.json(opnsenseInfo, 200);
};
