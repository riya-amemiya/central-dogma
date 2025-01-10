import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMongodbResponse200Schema } from "./schema";

export const endoflifeMongodbRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mongodb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMongodbResponse200Schema,
        },
      },
      description: "Get the Mongodb end-of-life information",
    },
  },
});
