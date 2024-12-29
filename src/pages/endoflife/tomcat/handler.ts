import type { endoflifeTomcatRoute } from "./route";
import type { GetTomcatResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTomcatHandler: RouteHandler<
  typeof endoflifeTomcatRoute
> = async (c) => {
  const tomcatInfoResponse = await fetch(
    "https://endoflife.date/api/tomcat.json",
  );
  const tomcatInfo = (await tomcatInfoResponse.json()) as z.infer<
    typeof GetTomcatResponse200Schema
  >;
  return c.json(tomcatInfo, 200);
};
