import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPrivatebinResponse200Schema } from "./schema";

export const endoflifePrivatebinRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/privatebin",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPrivatebinResponse200Schema,
        },
      },
      description: "Get the Privatebin end-of-life information",
    },
  },
});
