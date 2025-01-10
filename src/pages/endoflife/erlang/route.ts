import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetErlangResponse200Schema } from "./schema";

export const endoflifeErlangRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/erlang",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetErlangResponse200Schema,
        },
      },
      description: "Get the Erlang end-of-life information",
    },
  },
});
