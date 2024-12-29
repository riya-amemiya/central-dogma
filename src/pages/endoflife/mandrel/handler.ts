import type { endoflifeMandrelRoute } from "./route";
import type { GetMandrelResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMandrelHandler: RouteHandler<
  typeof endoflifeMandrelRoute
> = async (c) => {
  const mandrelInfoResponse = await fetch(
    "https://endoflife.date/api/mandrel.json",
  );
  const mandrelInfo = (await mandrelInfoResponse.json()) as z.infer<
    typeof GetMandrelResponse200Schema
  >;
  return c.json(mandrelInfo, 200);
};
