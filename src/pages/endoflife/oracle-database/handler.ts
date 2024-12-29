import type { endoflifeOracleDatabaseRoute } from "./route";
import type { GetOracleDatabaseResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOracleDatabaseHandler: RouteHandler<
  typeof endoflifeOracleDatabaseRoute
> = async (c) => {
  const oracleDatabaseInfoResponse = await fetch(
    "https://endoflife.date/api/oracle-database.json",
  );
  const oracleDatabaseInfo =
    (await oracleDatabaseInfoResponse.json()) as z.infer<
      typeof GetOracleDatabaseResponse200Schema
    >;
  return c.json(oracleDatabaseInfo, 200);
};
