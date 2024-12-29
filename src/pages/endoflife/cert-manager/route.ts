import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCertManagerResponse200Schema } from "./schema";

export const endoflifeCertManagerRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cert-manager",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCertManagerResponse200Schema,
        },
      },
      description: "Get the CertManager end-of-life information",
    },
  },
});
