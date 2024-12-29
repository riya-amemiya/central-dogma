import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCkeditorResponse200Schema } from "./schema";

export const endoflifeCkeditorRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ckeditor",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCkeditorResponse200Schema,
        },
      },
      description: "Get the Ckeditor end-of-life information",
    },
  },
});
