import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWeechatResponse200Schema } from "./schema";

export const endoflifeWeechatRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/weechat",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWeechatResponse200Schema,
        },
      },
      description: "Get the Weechat end-of-life information",
    },
  },
});
