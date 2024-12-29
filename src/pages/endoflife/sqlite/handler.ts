import type { endoflifeSqliteRoute } from "./route";
import type { GetSqliteResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSqliteHandler: RouteHandler<
  typeof endoflifeSqliteRoute
> = async (c) => {
  const sqliteInfoResponse = await fetch(
    "https://endoflife.date/api/sqlite.json",
  );
  const sqliteInfo = (await sqliteInfoResponse.json()) as z.infer<
    typeof GetSqliteResponse200Schema
  >;
  return c.json(sqliteInfo, 200);
};
