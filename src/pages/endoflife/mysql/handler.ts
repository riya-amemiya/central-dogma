import type { endoflifeMysqlRoute } from "./route";
import type { GetMysqlResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMysqlHandler: RouteHandler<
  typeof endoflifeMysqlRoute
> = async (c) => {
  const mysqlInfoResponse = await fetch(
    "https://endoflife.date/api/mysql.json",
  );
  const mysqlInfo = (await mysqlInfoResponse.json()) as z.infer<
    typeof GetMysqlResponse200Schema
  >;
  return c.json(mysqlInfo, 200);
};
