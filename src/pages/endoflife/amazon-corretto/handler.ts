import type { endoflifeAmazonCorrettoRoute } from "./route";
import type { GetAmazonCorrettoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonCorrettoHandler: RouteHandler<
  typeof endoflifeAmazonCorrettoRoute
> = async (c) => {
  const amazonCorrettoInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-corretto.json",
  );
  const amazonCorrettoInfo =
    (await amazonCorrettoInfoResponse.json()) as z.infer<
      typeof GetAmazonCorrettoResponse200Schema
    >;
  return c.json(amazonCorrettoInfo, 200);
};
