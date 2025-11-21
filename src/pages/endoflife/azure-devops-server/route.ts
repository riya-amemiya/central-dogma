import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAzureDevopsServerResponse200Schema } from "./schema";

export const endoflifeAzureDevopsServerRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/azure-devops-server",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAzureDevopsServerResponse200Schema,
        },
      },
      description: "Get the AzureDevopsServer end-of-life information",
    },
  },
});
