import type { endoflifeZookeeperRoute } from "./route";
import type { GetZookeeperResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeZookeeperHandler: RouteHandler<
  typeof endoflifeZookeeperRoute
> = async (c) => {
  const zookeeperInfoResponse = await fetch(
    "https://endoflife.date/api/zookeeper.json",
  );
  const zookeeperInfo = (await zookeeperInfoResponse.json()) as z.infer<
    typeof GetZookeeperResponse200Schema
  >;
  return c.json(zookeeperInfo, 200);
};
