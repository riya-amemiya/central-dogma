import type { endoflifeWordpressRoute } from "./route";
import type { GetWordpressResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWordpressHandler: RouteHandler<
  typeof endoflifeWordpressRoute
> = async (c) => {
  const wordpressInfoResponse = await fetch(
    "https://endoflife.date/api/wordpress.json",
  );
  const wordpressInfo = (await wordpressInfoResponse.json()) as z.infer<
    typeof GetWordpressResponse200Schema
  >;
  return c.json(wordpressInfo, 200);
};
