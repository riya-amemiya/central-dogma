import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetElixirResponse200Schema } from "./schema";

export const endoflifeElixirRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/elixir",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetElixirResponse200Schema,
        },
      },
      description: "Get the Elixir end-of-life information",
    },
  },
});
