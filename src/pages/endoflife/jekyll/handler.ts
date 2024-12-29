import type { endoflifeJekyllRoute } from "./route";
import type { GetJekyllResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJekyllHandler: RouteHandler<
  typeof endoflifeJekyllRoute
> = async (c) => {
  const jekyllInfoResponse = await fetch(
    "https://endoflife.date/api/jekyll.json",
  );
  const jekyllInfo = (await jekyllInfoResponse.json()) as z.infer<
    typeof GetJekyllResponse200Schema
  >;
  return c.json(jekyllInfo, 200);
};
