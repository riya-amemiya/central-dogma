import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetJiraSoftwareResponse200Schema } from "./schema";

export const endoflifeJiraSoftwareRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/jira-software",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetJiraSoftwareResponse200Schema,
        },
      },
      description: "Get the JiraSoftware end-of-life information",
    },
  },
});
