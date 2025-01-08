import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVuetifyResponse200Schema } from "./schema";

export const endoflifeVuetifyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/vuetify",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVuetifyResponse200Schema,
        },
      },
      description: "Get the Vuetify end-of-life information",
    },
  },
});
