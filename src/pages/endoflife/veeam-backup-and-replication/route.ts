import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVeeamBackupAndReplicationResponse200Schema } from "./schema";

export const endoflifeVeeamBackupAndReplicationRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/veeam-backup-and-replication",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVeeamBackupAndReplicationResponse200Schema,
        },
      },
      description: "Get the VeeamBackupAndReplication end-of-life information",
    },
  },
});
