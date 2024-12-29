import type { endoflifeApacheGroovyRoute } from "./route";
import type { GetApacheGroovyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheGroovyHandler: RouteHandler<
  typeof endoflifeApacheGroovyRoute
> = async (c) => {
  const apacheGroovyInfoResponse = await fetch(
    "https://endoflife.date/api/apache-groovy.json",
  );
  const apacheGroovyInfo = (await apacheGroovyInfoResponse.json()) as z.infer<
    typeof GetApacheGroovyResponse200Schema
  >;
  return c.json(apacheGroovyInfo, 200);
};
