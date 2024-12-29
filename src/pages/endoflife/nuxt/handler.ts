import type { endoflifeNuxtRoute } from "./route";
import type { GetNuxtResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNuxtHandler: RouteHandler<
  typeof endoflifeNuxtRoute
> = async (c) => {
  const nuxtInfoResponse = await fetch("https://endoflife.date/api/nuxt.json");
  const nuxtInfo = (await nuxtInfoResponse.json()) as z.infer<
    typeof GetNuxtResponse200Schema
  >;
  return c.json(nuxtInfo, 200);
};
