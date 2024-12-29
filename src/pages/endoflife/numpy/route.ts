import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetNumpyResponse200Schema } from "./schema";

export const endoflifeNumpyRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/numpy",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetNumpyResponse200Schema,
        },
      },
      description: "Get the Numpy end-of-life information",
    },
  },
});