import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheFlinkResponse200Schema } from "./schema";

export const endoflifeApacheFlinkRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-flink",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheFlinkResponse200Schema,
        },
      },
      description: "Get the ApacheFlink end-of-life information",
    },
  },
});