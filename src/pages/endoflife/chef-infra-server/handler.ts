import type { endoflifeChefInfraServerRoute } from "./route";
import type { GetChefInfraServerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeChefInfraServerHandler: RouteHandler<
  typeof endoflifeChefInfraServerRoute
> = async (c) => {
  const chefInfraServerInfoResponse = await fetch(
    "https://endoflife.date/api/chef-infra-server.json",
  );
  const chefInfraServerInfo =
    (await chefInfraServerInfoResponse.json()) as z.infer<
      typeof GetChefInfraServerResponse200Schema
    >;
  return c.json(chefInfraServerInfo, 200);
};
