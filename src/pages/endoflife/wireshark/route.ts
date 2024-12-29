import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWiresharkResponse200Schema } from "./schema";

export const endoflifeWiresharkRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/wireshark",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWiresharkResponse200Schema,
        },
      },
      description: "Get the Wireshark end-of-life information",
    },
  },
});
