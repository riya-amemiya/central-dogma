import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneYearMs } from "umt/module";

import {
  GetConvertTimeRequestQuerySchema,
  GetConvertTimeResponse200Schema,
} from "./schema";

export const convertTimeRoute = createRoute({
  tags: ["time"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneYearMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/convertTime",
  request: {
    query: GetConvertTimeRequestQuerySchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetConvertTimeResponse200Schema,
        },
      },
      description: "Get a converted time",
    },
  },
});
