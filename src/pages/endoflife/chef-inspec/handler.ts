import type { endoflifeChefInspecRoute } from "./route";
import type { GetChefInspecResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeChefInspecHandler: RouteHandler<
  typeof endoflifeChefInspecRoute
> = async (c) => {
  const chefInspecInfoResponse = await fetch(
    "https://endoflife.date/api/chef-inspec.json",
  );
  const chefInspecInfo = (await chefInspecInfoResponse.json()) as z.infer<
    typeof GetChefInspecResponse200Schema
  >;
  return c.json(chefInspecInfo, 200);
};
