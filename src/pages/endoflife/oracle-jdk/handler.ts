import type { endoflifeOracleJdkRoute } from "./route";
import type { GetOracleJdkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOracleJdkHandler: RouteHandler<
  typeof endoflifeOracleJdkRoute
> = async (c) => {
  const oracleJdkInfoResponse = await fetch(
    "https://endoflife.date/api/oracle-jdk.json",
  );
  const oracleJdkInfo = (await oracleJdkInfoResponse.json()) as z.infer<
    typeof GetOracleJdkResponse200Schema
  >;
  return c.json(oracleJdkInfo, 200);
};
