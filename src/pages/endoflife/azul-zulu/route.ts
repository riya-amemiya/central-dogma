import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAzulZuluResponse200Schema } from "./schema";

export const endoflifeAzulZuluRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/azul-zulu",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAzulZuluResponse200Schema,
        },
      },
      description: "Get the AzulZulu end-of-life information",
    },
  },
});
