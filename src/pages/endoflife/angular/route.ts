import { createRoute } from "@hono/zod-openapi";

import { GetEndoflifeAngularResponse200Schema } from "./schema.js";

export const endoflifeAngularRoute = createRoute({
  method: "get",
  path: "/endoflife/angular",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEndoflifeAngularResponse200Schema,
        },
      },
      description: "Get the Angular end-of-life information",
    },
  },
});
