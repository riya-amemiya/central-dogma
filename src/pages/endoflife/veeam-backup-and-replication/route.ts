import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetVeeamBackupAndReplicationResponse200Schema } from "./schema";

export const endoflifeVeeamBackupAndReplicationRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
