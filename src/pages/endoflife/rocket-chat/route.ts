import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRocketChatResponse200Schema } from "./schema";

export const endoflifeRocketChatRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
