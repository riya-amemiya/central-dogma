import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPythonResponse200Schema } from "./schema";

export const endoflifePythonRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/python",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPythonResponse200Schema,
        },
      },
      description: "Get the Python end-of-life information",
    },
  },
});
