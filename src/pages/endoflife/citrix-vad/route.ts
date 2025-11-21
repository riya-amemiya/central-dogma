import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetCitrixVadResponse200Schema } from "./schema";

export const endoflifeCitrixVadRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/citrix-vad",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCitrixVadResponse200Schema,
        },
      },
      description: "Get the CitrixVad end-of-life information",
    },
  },
});
