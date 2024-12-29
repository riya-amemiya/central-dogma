import type { endoflifeSvelteRoute } from "./route";
import type { GetSvelteResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSvelteHandler: RouteHandler<
  typeof endoflifeSvelteRoute
> = async (c) => {
  const svelteInfoResponse = await fetch(
    "https://endoflife.date/api/svelte.json",
  );
  const svelteInfo = (await svelteInfoResponse.json()) as z.infer<
    typeof GetSvelteResponse200Schema
  >;
  return c.json(svelteInfo, 200);
};
