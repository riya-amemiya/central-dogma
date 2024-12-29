import type { endoflifeApacheStrutsRoute } from "./route";
import type { GetApacheStrutsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheStrutsHandler: RouteHandler<
  typeof endoflifeApacheStrutsRoute
> = async (c) => {
  const apacheStrutsInfoResponse = await fetch(
    "https://endoflife.date/api/apache-struts.json",
  );
  const apacheStrutsInfo = (await apacheStrutsInfoResponse.json()) as z.infer<
    typeof GetApacheStrutsResponse200Schema
  >;
  return c.json(apacheStrutsInfo, 200);
};
