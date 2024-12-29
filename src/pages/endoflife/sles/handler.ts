import type { endoflifeSlesRoute } from "./route";
import type { GetSlesResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSlesHandler: RouteHandler<
  typeof endoflifeSlesRoute
> = async (c) => {
  const slesInfoResponse = await fetch("https://endoflife.date/api/sles.json");
  const slesInfo = (await slesInfoResponse.json()) as z.infer<
    typeof GetSlesResponse200Schema
  >;
  return c.json(slesInfo, 200);
};
