import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPodmanResponse200Schema } from "./schema";

export const endoflifePodmanRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/podman",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPodmanResponse200Schema,
        },
      },
      description: "Get the Podman end-of-life information",
    },
  },
});
