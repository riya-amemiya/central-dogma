import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetHashicorpVaultResponse200Schema } from "./schema";

export const endoflifeHashicorpVaultRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/hashicorp-vault",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetHashicorpVaultResponse200Schema,
        },
      },
      description: "Get the HashicorpVault end-of-life information",
    },
  },
});
