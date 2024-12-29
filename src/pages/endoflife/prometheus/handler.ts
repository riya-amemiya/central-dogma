import type { endoflifePrometheusRoute } from "./route";
import type { GetPrometheusResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePrometheusHandler: RouteHandler<
  typeof endoflifePrometheusRoute
> = async (c) => {
  const prometheusInfoResponse = await fetch(
    "https://endoflife.date/api/prometheus.json",
  );
  const prometheusInfo = (await prometheusInfoResponse.json()) as z.infer<
    typeof GetPrometheusResponse200Schema
  >;
  return c.json(prometheusInfo, 200);
};
