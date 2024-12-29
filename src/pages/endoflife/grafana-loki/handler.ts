import type { endoflifeGrafanaLokiRoute } from "./route";
import type { GetGrafanaLokiResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGrafanaLokiHandler: RouteHandler<
  typeof endoflifeGrafanaLokiRoute
> = async (c) => {
  const grafanaLokiInfoResponse = await fetch(
    "https://endoflife.date/api/grafana-loki.json",
  );
  const grafanaLokiInfo = (await grafanaLokiInfoResponse.json()) as z.infer<
    typeof GetGrafanaLokiResponse200Schema
  >;
  return c.json(grafanaLokiInfo, 200);
};
