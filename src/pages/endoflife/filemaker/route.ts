import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFilemakerResponse200Schema } from "./schema";

export const endoflifeFilemakerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/filemaker",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFilemakerResponse200Schema,
        },
      },
      description: "Get the Filemaker end-of-life information",
    },
  },
});
