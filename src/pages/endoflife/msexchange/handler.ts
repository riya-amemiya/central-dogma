import type { endoflifeMsexchangeRoute } from "./route";
import type { GetMsexchangeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMsexchangeHandler: RouteHandler<
  typeof endoflifeMsexchangeRoute
> = async (c) => {
  const msexchangeInfoResponse = await fetch(
    "https://endoflife.date/api/msexchange.json",
  );
  const msexchangeInfo = (await msexchangeInfoResponse.json()) as z.infer<
    typeof GetMsexchangeResponse200Schema
  >;
  return c.json(msexchangeInfo, 200);
};
