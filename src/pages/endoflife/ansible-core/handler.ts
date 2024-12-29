import type { endoflifeAnsibleCoreRoute } from "./route";
import type { GetAnsibleCoreResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAnsibleCoreHandler: RouteHandler<
  typeof endoflifeAnsibleCoreRoute
> = async (c) => {
  const ansibleCoreInfoResponse = await fetch(
    "https://endoflife.date/api/ansible-core.json",
  );
  const ansibleCoreInfo = (await ansibleCoreInfoResponse.json()) as z.infer<
    typeof GetAnsibleCoreResponse200Schema
  >;
  return c.json(ansibleCoreInfo, 200);
};
