import type { endoflifeAmazonEksRoute } from "./route";
import type { GetAmazonEksResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonEksHandler: RouteHandler<
  typeof endoflifeAmazonEksRoute
> = async (c) => {
  const amazonEksInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-eks.json",
  );
  const amazonEksInfo = (await amazonEksInfoResponse.json()) as z.infer<
    typeof GetAmazonEksResponse200Schema
  >;
  return c.json(amazonEksInfo, 200);
};
