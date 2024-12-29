import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKeycloakResponse200Schema } from "./schema";

export const endoflifeKeycloakRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/keycloak",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKeycloakResponse200Schema,
        },
      },
      description: "Get the Keycloak end-of-life information",
    },
  },
});
