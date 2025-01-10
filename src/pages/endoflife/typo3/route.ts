import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTypo3Response200Schema } from "./schema";

export const endoflifeTypo3Route = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/typo3",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTypo3Response200Schema,
        },
      },
      description: "Get the Typo3 end-of-life information",
    },
  },
});
