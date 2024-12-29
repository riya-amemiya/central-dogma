import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGstreamerResponse200Schema } from "./schema";

export const endoflifeGstreamerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/gstreamer",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGstreamerResponse200Schema,
        },
      },
      description: "Get the Gstreamer end-of-life information",
    },
  },
});
