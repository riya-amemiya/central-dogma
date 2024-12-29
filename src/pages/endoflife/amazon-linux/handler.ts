import type { endoflifeAmazonLinuxRoute } from "./route";
import type { GetAmazonLinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonLinuxHandler: RouteHandler<
  typeof endoflifeAmazonLinuxRoute
> = async (c) => {
  const amazonLinuxInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-linux.json",
  );
  const amazonLinuxInfo = (await amazonLinuxInfoResponse.json()) as z.infer<
    typeof GetAmazonLinuxResponse200Schema
  >;
  return c.json(amazonLinuxInfo, 200);
};
