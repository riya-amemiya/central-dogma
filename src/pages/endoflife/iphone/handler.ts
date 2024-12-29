import type { endoflifeIphoneRoute } from "./route";
import type { GetIphoneResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIphoneHandler: RouteHandler<
  typeof endoflifeIphoneRoute
> = async (c) => {
  const iphoneInfoResponse = await fetch(
    "https://endoflife.date/api/iphone.json",
  );
  const iphoneInfo = (await iphoneInfoResponse.json()) as z.infer<
    typeof GetIphoneResponse200Schema
  >;
  return c.json(iphoneInfo, 200);
};
