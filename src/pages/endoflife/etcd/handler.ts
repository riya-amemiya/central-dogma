import type { endoflifeEtcdRoute } from "./route";
import type { GetEtcdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEtcdHandler: RouteHandler<
  typeof endoflifeEtcdRoute
> = async (c) => {
  const etcdInfoResponse = await fetch("https://endoflife.date/api/etcd.json");
  const etcdInfo = (await etcdInfoResponse.json()) as z.infer<
    typeof GetEtcdResponse200Schema
  >;
  return c.json(etcdInfo, 200);
};
