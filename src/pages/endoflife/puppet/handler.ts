import type { endoflifePuppetRoute } from "./route";
import type { GetPuppetResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePuppetHandler: RouteHandler<
  typeof endoflifePuppetRoute
> = async (c) => {
  const puppetInfoResponse = await fetch(
    "https://endoflife.date/api/puppet.json",
  );
  const puppetInfo = (await puppetInfoResponse.json()) as z.infer<
    typeof GetPuppetResponse200Schema
  >;
  return c.json(puppetInfo, 200);
};
