import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMotorolaMobilityResponse200Schema } from "./schema";

export const endoflifeMotorolaMobilityRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/motorola-mobility",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMotorolaMobilityResponse200Schema,
        },
      },
      description: "Get the MotorolaMobility end-of-life information",
    },
  },
});
