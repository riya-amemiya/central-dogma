import type { endoflifeOracleLinuxRoute } from "./route";
import type { GetOracleLinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOracleLinuxHandler: RouteHandler<
  typeof endoflifeOracleLinuxRoute
> = async (c) => {
  const oracleLinuxInfoResponse = await fetch(
    "https://endoflife.date/api/oracle-linux.json",
  );
  const oracleLinuxInfo = (await oracleLinuxInfoResponse.json()) as z.infer<
    typeof GetOracleLinuxResponse200Schema
  >;
  return c.json(oracleLinuxInfo, 200);
};
