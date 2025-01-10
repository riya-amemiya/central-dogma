import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpenvpnResponse200Schema } from "./schema";

export const endoflifeOpenvpnRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/openvpn",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpenvpnResponse200Schema,
        },
      },
      description: "Get the Openvpn end-of-life information",
    },
  },
});
