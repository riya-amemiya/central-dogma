import type { endoflifeGradleRoute } from "./route";
import type { GetGradleResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGradleHandler: RouteHandler<
  typeof endoflifeGradleRoute
> = async (c) => {
  const gradleInfoResponse = await fetch(
    "https://endoflife.date/api/gradle.json",
  );
  const gradleInfo = (await gradleInfoResponse.json()) as z.infer<
    typeof GetGradleResponse200Schema
  >;
  return c.json(gradleInfo, 200);
};
