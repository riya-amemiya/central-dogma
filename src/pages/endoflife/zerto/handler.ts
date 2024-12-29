import type { endoflifeZertoRoute } from "./route";
import type { GetZertoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeZertoHandler: RouteHandler<
  typeof endoflifeZertoRoute
> = async (c) => {
  const zertoInfoResponse = await fetch(
    "https://endoflife.date/api/zerto.json",
  );
  const zertoInfo = (await zertoInfoResponse.json()) as z.infer<
    typeof GetZertoResponse200Schema
  >;
  return c.json(zertoInfo, 200);
};
