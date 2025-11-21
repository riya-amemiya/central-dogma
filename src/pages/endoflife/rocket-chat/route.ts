import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetRocketChatResponse200Schema } from "./schema";

export const endoflifeRocketChatRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rocket-chat",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRocketChatResponse200Schema,
        },
      },
      description: "Get the RocketChat end-of-life information",
    },
  },
});
