import type { endoflifeMavenRoute } from "./route";
import type { GetMavenResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMavenHandler: RouteHandler<
  typeof endoflifeMavenRoute
> = async (c) => {
  const mavenInfoResponse = await fetch(
    "https://endoflife.date/api/maven.json",
  );
  const mavenInfo = (await mavenInfoResponse.json()) as z.infer<
    typeof GetMavenResponse200Schema
  >;
  return c.json(mavenInfo, 200);
};
