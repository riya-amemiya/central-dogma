import type { endoflifeRancherRoute } from "./route";
import type { GetRancherResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRancherHandler: RouteHandler<
  typeof endoflifeRancherRoute
> = async (c) => {
  const rancherInfoResponse = await fetch(
    "https://endoflife.date/api/rancher.json",
  );
  const rancherInfo = (await rancherInfoResponse.json()) as z.infer<
    typeof GetRancherResponse200Schema
  >;
  return c.json(rancherInfo, 200);
};
