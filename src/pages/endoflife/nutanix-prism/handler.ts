import type { endoflifeNutanixPrismRoute } from "./route";
import type { GetNutanixPrismResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNutanixPrismHandler: RouteHandler<
  typeof endoflifeNutanixPrismRoute
> = async (c) => {
  const nutanixPrismInfoResponse = await fetch(
    "https://endoflife.date/api/nutanix-prism.json",
  );
  const nutanixPrismInfo = (await nutanixPrismInfoResponse.json()) as z.infer<
    typeof GetNutanixPrismResponse200Schema
  >;
  return c.json(nutanixPrismInfo, 200);
};
