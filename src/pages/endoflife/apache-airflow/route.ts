import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheAirflowResponse200Schema } from "./schema";

export const endoflifeApacheAirflowRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-airflow",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheAirflowResponse200Schema,
        },
      },
      description: "Get the ApacheAirflow end-of-life information",
    },
  },
});
