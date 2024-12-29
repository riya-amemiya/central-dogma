import type { endoflifePerlRoute } from "./route";
import type { GetPerlResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePerlHandler: RouteHandler<
  typeof endoflifePerlRoute
> = async (c) => {
  const perlInfoResponse = await fetch("https://endoflife.date/api/perl.json");
  const perlInfo = (await perlInfoResponse.json()) as z.infer<
    typeof GetPerlResponse200Schema
  >;
  return c.json(perlInfo, 200);
};
