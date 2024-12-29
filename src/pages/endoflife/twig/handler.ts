import type { endoflifeTwigRoute } from "./route";
import type { GetTwigResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTwigHandler: RouteHandler<
  typeof endoflifeTwigRoute
> = async (c) => {
  const twigInfoResponse = await fetch("https://endoflife.date/api/twig.json");
  const twigInfo = (await twigInfoResponse.json()) as z.infer<
    typeof GetTwigResponse200Schema
  >;
  return c.json(twigInfo, 200);
};
