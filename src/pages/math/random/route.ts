import { createRoute } from "@hono/zod-openapi";

import {
  GetRandomRequestQuerySchema,
  GetRandomResponse200Schema,
  GetRandomResponse400Schema,
} from "./schema";

export const randomRoute = createRoute({
  tags: ["math"],
  method: "get",
  path: "/random",
  request: {
    query: GetRandomRequestQuerySchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRandomResponse200Schema,
        },
      },
      description: "Get a random number",
    },
    400: {
      content: {
        "application/json": {
          schema: GetRandomResponse400Schema,
        },
      },
      description: "Invalid input",
    },
  },
});
