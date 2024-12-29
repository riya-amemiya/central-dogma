import type { endoflifePanosRoute } from "./route";
import type { GetPanosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePanosHandler: RouteHandler<
  typeof endoflifePanosRoute
> = async (c) => {
  const panosInfoResponse = await fetch(
    "https://endoflife.date/api/panos.json",
  );
  const panosInfo = (await panosInfoResponse.json()) as z.infer<
    typeof GetPanosResponse200Schema
  >;
  return c.json(panosInfo, 200);
};
