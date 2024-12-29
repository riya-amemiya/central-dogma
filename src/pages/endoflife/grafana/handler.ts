import type { endoflifeGrafanaRoute } from "./route";
import type { GetGrafanaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGrafanaHandler: RouteHandler<
  typeof endoflifeGrafanaRoute
> = async (c) => {
  const grafanaInfoResponse = await fetch(
    "https://endoflife.date/api/grafana.json",
  );
  const grafanaInfo = (await grafanaInfoResponse.json()) as z.infer<
    typeof GetGrafanaResponse200Schema
  >;
  return c.json(grafanaInfo, 200);
};
