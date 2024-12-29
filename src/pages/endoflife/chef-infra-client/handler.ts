import type { endoflifeChefInfraClientRoute } from "./route";
import type { GetChefInfraClientResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeChefInfraClientHandler: RouteHandler<
  typeof endoflifeChefInfraClientRoute
> = async (c) => {
  const chefInfraClientInfoResponse = await fetch(
    "https://endoflife.date/api/chef-infra-client.json",
  );
  const chefInfraClientInfo =
    (await chefInfraClientInfoResponse.json()) as z.infer<
      typeof GetChefInfraClientResponse200Schema
    >;
  return c.json(chefInfraClientInfo, 200);
};
