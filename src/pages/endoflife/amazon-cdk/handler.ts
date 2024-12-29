import type { endoflifeAmazonCdkRoute } from "./route";
import type { GetAmazonCdkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonCdkHandler: RouteHandler<
  typeof endoflifeAmazonCdkRoute
> = async (c) => {
  const amazonCdkInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-cdk.json",
  );
  const amazonCdkInfo = (await amazonCdkInfoResponse.json()) as z.infer<
    typeof GetAmazonCdkResponse200Schema
  >;
  return c.json(amazonCdkInfo, 200);
};
