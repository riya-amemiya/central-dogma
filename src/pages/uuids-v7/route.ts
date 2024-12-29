import { createRoute } from "@hono/zod-openapi";

import {
  GetUuidsV7RequestQuerySchema,
  GetUuidsV7Response200Schema,
  GetUuidsV7Response400Schema,
} from "./schema.js";

export const uuidsV7Route = createRoute({
  method: "get",
  path: "/uuids-v7",
  request: {
    query: GetUuidsV7RequestQuerySchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUuidsV7Response200Schema,
        },
      },
      description: "Get a list of UUIDv7s",
    },
    400: {
      content: {
        "application/json": {
          schema: GetUuidsV7Response400Schema,
        },
      },
      description: "Bad request",
    },
  },
});
