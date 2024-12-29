import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetConsulResponse200Schema } from "./schema";

export const endoflifeConsulRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/consul",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetConsulResponse200Schema,
        },
      },
      description: "Get the Consul end-of-life information",
    },
  },
});
