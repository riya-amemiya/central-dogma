import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMastodonResponse200Schema } from "./schema";

export const endoflifeMastodonRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mastodon",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMastodonResponse200Schema,
        },
      },
      description: "Get the Mastodon end-of-life information",
    },
  },
});
