import type { endoflifeAmazonRdsPostgresqlRoute } from "./route";
import type { GetAmazonRdsPostgresqlResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAmazonRdsPostgresqlHandler: RouteHandler<
  typeof endoflifeAmazonRdsPostgresqlRoute
> = async (c) => {
  const amazonRdsPostgresqlInfoResponse = await fetch(
    "https://endoflife.date/api/amazon-rds-postgresql.json",
  );
  const amazonRdsPostgresqlInfo =
    (await amazonRdsPostgresqlInfoResponse.json()) as z.infer<
      typeof GetAmazonRdsPostgresqlResponse200Schema
    >;
  return c.json(amazonRdsPostgresqlInfo, 200);
};
