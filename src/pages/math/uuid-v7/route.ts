import { createRoute } from "@hono/zod-openapi";

import { GetUuidV7Response200Schema } from "./schema";

export const uuidV7Route = createRoute({
  tags: ["math"],
  method: "get",
  path: "/uuid-v7",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetUuidV7Response200Schema,
        },
      },
      description: "Get a UUIDv7",
    },
  },
});
