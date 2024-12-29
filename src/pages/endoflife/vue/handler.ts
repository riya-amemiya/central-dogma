import type { endoflifeVueRoute } from "./route";
import type { GetVueResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVueHandler: RouteHandler<
  typeof endoflifeVueRoute
> = async (c) => {
  const vueInfoResponse = await fetch("https://endoflife.date/api/vue.json");
  const vueInfo = (await vueInfoResponse.json()) as z.infer<
    typeof GetVueResponse200Schema
  >;
  return c.json(vueInfo, 200);
};
