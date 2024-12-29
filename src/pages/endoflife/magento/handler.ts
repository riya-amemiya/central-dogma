import type { endoflifeMagentoRoute } from "./route";
import type { GetMagentoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMagentoHandler: RouteHandler<
  typeof endoflifeMagentoRoute
> = async (c) => {
  const magentoInfoResponse = await fetch(
    "https://endoflife.date/api/magento.json",
  );
  const magentoInfo = (await magentoInfoResponse.json()) as z.infer<
    typeof GetMagentoResponse200Schema
  >;
  return c.json(magentoInfo, 200);
};
