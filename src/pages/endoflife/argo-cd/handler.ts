import type { endoflifeArgoCdRoute } from "./route";
import type { GetArgoCdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeArgoCdHandler: RouteHandler<
  typeof endoflifeArgoCdRoute
> = async (c) => {
  const argoCdInfoResponse = await fetch(
    "https://endoflife.date/api/argo-cd.json",
  );
  const argoCdInfo = (await argoCdInfoResponse.json()) as z.infer<
    typeof GetArgoCdResponse200Schema
  >;
  return c.json(argoCdInfo, 200);
};
