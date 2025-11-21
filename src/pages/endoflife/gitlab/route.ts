import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetGitlabResponse200Schema } from "./schema";

export const endoflifeGitlabRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/gitlab",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGitlabResponse200Schema,
        },
      },
      description: "Get the Gitlab end-of-life information",
    },
  },
});
