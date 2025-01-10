import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRockyLinuxResponse200Schema } from "./schema";

export const endoflifeRockyLinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/rocky-linux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRockyLinuxResponse200Schema,
        },
      },
      description: "Get the RockyLinux end-of-life information",
    },
  },
});
