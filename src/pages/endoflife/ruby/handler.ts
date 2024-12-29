import type { endoflifeRubyRoute } from "./route";
import type { GetRubyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRubyHandler: RouteHandler<
  typeof endoflifeRubyRoute
> = async (c) => {
  const rubyInfoResponse = await fetch("https://endoflife.date/api/ruby.json");
  const rubyInfo = (await rubyInfoResponse.json()) as z.infer<
    typeof GetRubyResponse200Schema
  >;
  return c.json(rubyInfo, 200);
};
