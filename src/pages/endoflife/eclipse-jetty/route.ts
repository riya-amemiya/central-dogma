import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetEclipseJettyResponse200Schema } from "./schema";

export const endoflifeEclipseJettyRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/eclipse-jetty",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEclipseJettyResponse200Schema,
        },
      },
      description: "Get the EclipseJetty end-of-life information",
    },
  },
});
