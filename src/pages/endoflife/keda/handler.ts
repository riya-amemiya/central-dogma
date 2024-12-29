import type { endoflifeKedaRoute } from "./route";
import type { GetKedaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKedaHandler: RouteHandler<
  typeof endoflifeKedaRoute
> = async (c) => {
  const kedaInfoResponse = await fetch("https://endoflife.date/api/keda.json");
  const kedaInfo = (await kedaInfoResponse.json()) as z.infer<
    typeof GetKedaResponse200Schema
  >;
  return c.json(kedaInfo, 200);
};
