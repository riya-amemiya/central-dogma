import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetArangodbResponse200Schema } from "./schema";

export const endoflifeArangodbRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/arangodb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetArangodbResponse200Schema,
        },
      },
      description: "Get the Arangodb end-of-life information",
    },
  },
});