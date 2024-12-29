import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetElectronResponse200Schema } from "./schema";

export const endoflifeElectronRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/electron",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetElectronResponse200Schema,
        },
      },
      description: "Get the Electron end-of-life information",
    },
  },
});