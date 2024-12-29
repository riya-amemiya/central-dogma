import type { endoflifePleskRoute } from "./route";
import type { GetPleskResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePleskHandler: RouteHandler<
  typeof endoflifePleskRoute
> = async (c) => {
  const pleskInfoResponse = await fetch(
    "https://endoflife.date/api/plesk.json",
  );
  const pleskInfo = (await pleskInfoResponse.json()) as z.infer<
    typeof GetPleskResponse200Schema
  >;
  return c.json(pleskInfo, 200);
};
