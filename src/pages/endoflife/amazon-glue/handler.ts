import type { endoflifeAmazonGlueRoute } from "./route";
import type { GetAmazonGlueResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonGlueHandler: RouteHandler<
  typeof endoflifeAmazonGlueRoute
> = async (c) => {
  const amazonGlueInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-glue.json",
  );
  const amazonGlueInfo = (await amazonGlueInfoResponse.json()) as z.infer<
    typeof GetAmazonGlueResponse200Schema
  >;
  return c.json(amazonGlueInfo, 200);
};
