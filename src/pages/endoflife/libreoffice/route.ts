import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLibreofficeResponse200Schema } from "./schema";

export const endoflifeLibreofficeRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/libreoffice",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLibreofficeResponse200Schema,
        },
      },
      description: "Get the Libreoffice end-of-life information",
    },
  },
});
