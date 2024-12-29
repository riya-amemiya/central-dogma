import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPhotonResponse200Schema } from "./schema";

export const endoflifePhotonRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/photon",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPhotonResponse200Schema,
        },
      },
      description: "Get the Photon end-of-life information",
    },
  },
});
