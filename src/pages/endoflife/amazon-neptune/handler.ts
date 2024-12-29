import type { endoflifeAmazonNeptuneRoute } from "./route";
import type { GetAmazonNeptuneResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonNeptuneHandler: RouteHandler<
  typeof endoflifeAmazonNeptuneRoute
> = async (c) => {
  const amazonNeptuneInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-neptune.json",
  );
  const amazonNeptuneInfo = (await amazonNeptuneInfoResponse.json()) as z.infer<
    typeof GetAmazonNeptuneResponse200Schema
  >;
  return c.json(amazonNeptuneInfo, 200);
};
