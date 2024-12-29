import type { endoflifeAmazonRdsMysqlRoute } from "./route";
import type { GetAmazonRdsMysqlResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonRdsMysqlHandler: RouteHandler<
  typeof endoflifeAmazonRdsMysqlRoute
> = async (c) => {
  const amazonRdsMysqlInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-rds-mysql.json",
  );
  const amazonRdsMysqlInfo =
    (await amazonRdsMysqlInfoResponse.json()) as z.infer<
      typeof GetAmazonRdsMysqlResponse200Schema
    >;
  return c.json(amazonRdsMysqlInfo, 200);
};
