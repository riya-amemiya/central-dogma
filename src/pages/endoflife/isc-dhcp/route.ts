import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIscDhcpResponse200Schema } from "./schema";

export const endoflifeIscDhcpRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/isc-dhcp",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIscDhcpResponse200Schema,
        },
      },
      description: "Get the IscDhcp end-of-life information",
    },
  },
});
