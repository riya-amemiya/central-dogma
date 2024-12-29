import type { endoflifeApacheAirflowRoute } from "./route";
import type { GetApacheAirflowResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheAirflowHandler: RouteHandler<
  typeof endoflifeApacheAirflowRoute
> = async (c) => {
  const apacheAirflowInfoResponse = await fetch(
    "https://endoflife.date/api/apache-airflow.json",
  );
  const apacheAirflowInfo = (await apacheAirflowInfoResponse.json()) as z.infer<
    typeof GetApacheAirflowResponse200Schema
  >;
  return c.json(apacheAirflowInfo, 200);
};
