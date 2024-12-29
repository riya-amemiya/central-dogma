import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCfengineResponse200Schema } from "./schema";

export const endoflifeCfengineRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cfengine",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCfengineResponse200Schema,
        },
      },
      description: "Get the Cfengine end-of-life information",
    },
  },
});
