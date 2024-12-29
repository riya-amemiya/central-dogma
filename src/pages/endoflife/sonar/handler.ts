import type { endoflifeSonarRoute } from "./route";
import type { GetSonarResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSonarHandler: RouteHandler<
  typeof endoflifeSonarRoute
> = async (c) => {
  const sonarInfoResponse = await fetch(
    "https://endoflife.date/api/sonar.json",
  );
  const sonarInfo = (await sonarInfoResponse.json()) as z.infer<
    typeof GetSonarResponse200Schema
  >;
  return c.json(sonarInfo, 200);
};
