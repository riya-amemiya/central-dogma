import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetFfmpegResponse200Schema } from "./schema";

export const endoflifeFfmpegRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ffmpeg",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetFfmpegResponse200Schema,
        },
      },
      description: "Get the Ffmpeg end-of-life information",
    },
  },
});
