import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetTraefikResponse200Schema } from "./schema";

export const endoflifeTraefikRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/traefik",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTraefikResponse200Schema,
        },
      },
      description: "Get the Traefik end-of-life information",
    },
  },
});
