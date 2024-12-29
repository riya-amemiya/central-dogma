import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEmberjsResponse200Schema } from "./schema";

export const endoflifeEmberjsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/emberjs",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEmberjsResponse200Schema,
        },
      },
      description: "Get the Emberjs end-of-life information",
    },
  },
});
