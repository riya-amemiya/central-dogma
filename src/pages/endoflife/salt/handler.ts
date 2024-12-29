import type { endoflifeSaltRoute } from "./route";
import type { GetSaltResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSaltHandler: RouteHandler<
  typeof endoflifeSaltRoute
> = async (c) => {
  const saltInfoResponse = await fetch("https://endoflife.date/api/salt.json");
  const saltInfo = (await saltInfoResponse.json()) as z.infer<
    typeof GetSaltResponse200Schema
  >;
  return c.json(saltInfo, 200);
};
