import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGitlabResponse200Schema } from "./schema";

export const endoflifeGitlabRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
