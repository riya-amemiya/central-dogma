import type { endoflifeOpenjdkBuildsFromOracleRoute } from "./route";
import type { GetOpenjdkBuildsFromOracleResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpenjdkBuildsFromOracleHandler: RouteHandler<
  typeof endoflifeOpenjdkBuildsFromOracleRoute
> = async (c) => {
  const openjdkBuildsFromOracleInfoResponse = await fetch(
    "https://endoflife.date/api/openjdk-builds-from-oracle.json",
  );
  const openjdkBuildsFromOracleInfo =
    (await openjdkBuildsFromOracleInfoResponse.json()) as z.infer<
      typeof GetOpenjdkBuildsFromOracleResponse200Schema
    >;
  return c.json(openjdkBuildsFromOracleInfo, 200);
};
