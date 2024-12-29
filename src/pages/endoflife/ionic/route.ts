import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIonicResponse200Schema } from "./schema";

export const endoflifeIonicRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ionic",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIonicResponse200Schema,
        },
      },
      description: "Get the Ionic end-of-life information",
    },
  },
});
