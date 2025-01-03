import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKongGatewayResponse200Schema } from "./schema";

export const endoflifeKongGatewayRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kong-gateway",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKongGatewayResponse200Schema,
        },
      },
      description: "Get the KongGateway end-of-life information",
    },
  },
});
