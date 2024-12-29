import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheHadoopResponse200Schema } from "./schema";

export const endoflifeApacheHadoopRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-hadoop",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheHadoopResponse200Schema,
        },
      },
      description: "Get the ApacheHadoop end-of-life information",
    },
  },
});
