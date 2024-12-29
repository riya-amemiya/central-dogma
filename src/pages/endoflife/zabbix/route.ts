import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetZabbixResponse200Schema } from "./schema";

export const endoflifeZabbixRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/zabbix",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetZabbixResponse200Schema,
        },
      },
      description: "Get the Zabbix end-of-life information",
    },
  },
});
