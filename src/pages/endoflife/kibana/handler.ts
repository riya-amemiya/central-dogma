import type { endoflifeKibanaRoute } from "./route";
import type { GetKibanaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKibanaHandler: RouteHandler<
  typeof endoflifeKibanaRoute
> = async (c) => {
  const kibanaInfoResponse = await fetch(
    "https://endoflife.date/api/kibana.json",
  );
  const kibanaInfo = (await kibanaInfoResponse.json()) as z.infer<
    typeof GetKibanaResponse200Schema
  >;
  return c.json(kibanaInfo, 200);
};
