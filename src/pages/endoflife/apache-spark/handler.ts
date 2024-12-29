import type { endoflifeApacheSparkRoute } from "./route";
import type { GetApacheSparkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheSparkHandler: RouteHandler<
  typeof endoflifeApacheSparkRoute
> = async (c) => {
  const apacheSparkInfoResponse = await fetch(
    "https://endoflife.date/api/apache-spark.json",
  );
  const apacheSparkInfo = (await apacheSparkInfoResponse.json()) as z.infer<
    typeof GetApacheSparkResponse200Schema
  >;
  return c.json(apacheSparkInfo, 200);
};
