import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTraefikResponse200Schema } from "./schema";

export const endoflifeTraefikRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
