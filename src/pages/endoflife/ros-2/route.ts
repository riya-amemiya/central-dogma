import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRos2Response200Schema } from "./schema";

export const endoflifeRos2Route = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ros-2",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRos2Response200Schema,
        },
      },
      description: "Get the Ros2 end-of-life information",
    },
  },
});
