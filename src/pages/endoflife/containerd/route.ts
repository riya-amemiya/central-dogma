import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetContainerdResponse200Schema } from "./schema";

export const endoflifeContainerdRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/containerd",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetContainerdResponse200Schema,
        },
      },
      description: "Get the Containerd end-of-life information",
    },
  },
});
