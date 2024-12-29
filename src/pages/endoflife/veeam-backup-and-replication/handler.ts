import type { endoflifeVeeamBackupAndReplicationRoute } from "./route";
import type { GetVeeamBackupAndReplicationResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVeeamBackupAndReplicationHandler: RouteHandler<
  typeof endoflifeVeeamBackupAndReplicationRoute
> = async (c) => {
  const veeamBackupAndReplicationInfoResponse = await fetch(
    "https://endoflife.date/api/veeam-backup-and-replication.json",
  );
  const veeamBackupAndReplicationInfo =
    (await veeamBackupAndReplicationInfoResponse.json()) as z.infer<
      typeof GetVeeamBackupAndReplicationResponse200Schema
    >;
  return c.json(veeamBackupAndReplicationInfo, 200);
};
