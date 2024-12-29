import type { endoflifeOracleApexRoute } from "./route";
import type { GetOracleApexResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOracleApexHandler: RouteHandler<
  typeof endoflifeOracleApexRoute
> = async (c) => {
  const oracleApexInfoResponse = await fetch(
    "https://endoflife.date/api/oracle-apex.json",
  );
  const oracleApexInfo = (await oracleApexInfoResponse.json()) as z.infer<
    typeof GetOracleApexResponse200Schema
  >;
  return c.json(oracleApexInfo, 200);
};
