import type { endoflifeNginxRoute } from "./route";
import type { GetNginxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNginxHandler: RouteHandler<
  typeof endoflifeNginxRoute
> = async (c) => {
  const nginxInfoResponse = await fetch(
    "https://endoflife.date/api/nginx.json",
  );
  const nginxInfo = (await nginxInfoResponse.json()) as z.infer<
    typeof GetNginxResponse200Schema
  >;
  return c.json(nginxInfo, 200);
};
