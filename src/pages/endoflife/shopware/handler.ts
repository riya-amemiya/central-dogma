import type { endoflifeShopwareRoute } from "./route";
import type { GetShopwareResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeShopwareHandler: RouteHandler<
  typeof endoflifeShopwareRoute
> = async (c) => {
  const shopwareInfoResponse = await fetch(
    "https://endoflife.date/api/shopware.json",
  );
  const shopwareInfo = (await shopwareInfoResponse.json()) as z.infer<
    typeof GetShopwareResponse200Schema
  >;
  return c.json(shopwareInfo, 200);
};
