import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCraftCmsResponse200Schema } from "./schema";

export const endoflifeCraftCmsRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/craft-cms",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCraftCmsResponse200Schema,
        },
      },
      description: "Get the CraftCms end-of-life information",
    },
  },
});
