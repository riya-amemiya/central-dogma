import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetInternetExplorerResponse200Schema } from "./schema";

export const endoflifeInternetExplorerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/internet-explorer",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetInternetExplorerResponse200Schema,
        },
      },
      description: "Get the InternetExplorer end-of-life information",
    },
  },
});
