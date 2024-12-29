import type { endoflifeHbaseRoute } from "./route";
import type { GetHbaseResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeHbaseHandler: RouteHandler<
  typeof endoflifeHbaseRoute
> = async (c) => {
  const hbaseInfoResponse = await fetch(
    "https://endoflife.date/api/hbase.json",
  );
  const hbaseInfo = (await hbaseInfoResponse.json()) as z.infer<
    typeof GetHbaseResponse200Schema
  >;
  return c.json(hbaseInfo, 200);
};
