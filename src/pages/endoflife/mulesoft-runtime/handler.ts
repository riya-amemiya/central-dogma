import type { endoflifeMulesoftRuntimeRoute } from "./route";
import type { GetMulesoftRuntimeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMulesoftRuntimeHandler: RouteHandler<
  typeof endoflifeMulesoftRuntimeRoute
> = async (c) => {
  const mulesoftRuntimeInfoResponse = await fetch(
    "https://endoflife.date/api/mulesoft-runtime.json",
  );
  const mulesoftRuntimeInfo =
    (await mulesoftRuntimeInfoResponse.json()) as z.infer<
      typeof GetMulesoftRuntimeResponse200Schema
    >;
  return c.json(mulesoftRuntimeInfo, 200);
};
