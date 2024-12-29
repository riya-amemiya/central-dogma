import type { endoflifeAmazonRdsMariadbRoute } from "./route";
import type { GetAmazonRdsMariadbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonRdsMariadbHandler: RouteHandler<
  typeof endoflifeAmazonRdsMariadbRoute
> = async (c) => {
  const amazonRdsMariadbInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-rds-mariadb.json",
  );
  const amazonRdsMariadbInfo =
    (await amazonRdsMariadbInfoResponse.json()) as z.infer<
      typeof GetAmazonRdsMariadbResponse200Schema
    >;
  return c.json(amazonRdsMariadbInfo, 200);
};
