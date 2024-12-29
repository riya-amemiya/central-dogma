import type { endoflifeOracleSolarisRoute } from "./route";
import type { GetOracleSolarisResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOracleSolarisHandler: RouteHandler<
  typeof endoflifeOracleSolarisRoute
> = async (c) => {
  const oracleSolarisInfoResponse = await fetch(
    "https://endoflife.date/api/oracle-solaris.json",
  );
  const oracleSolarisInfo = (await oracleSolarisInfoResponse.json()) as z.infer<
    typeof GetOracleSolarisResponse200Schema
  >;
  return c.json(oracleSolarisInfo, 200);
};
