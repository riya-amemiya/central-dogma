import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetProxmoxVeResponse200Schema } from "./schema";

export const endoflifeProxmoxVeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/proxmox-ve",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetProxmoxVeResponse200Schema,
        },
      },
      description: "Get the ProxmoxVe end-of-life information",
    },
  },
});
