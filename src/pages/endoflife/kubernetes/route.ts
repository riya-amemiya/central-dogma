import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKubernetesResponse200Schema } from "./schema";

export const endoflifeKubernetesRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kubernetes",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKubernetesResponse200Schema,
        },
      },
      description: "Get the Kubernetes end-of-life information",
    },
  },
});
