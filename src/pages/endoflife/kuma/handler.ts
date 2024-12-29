import type { endoflifeKumaRoute } from "./route";
import type { GetKumaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKumaHandler: RouteHandler<
  typeof endoflifeKumaRoute
> = async (c) => {
  const kumaInfoResponse = await fetch("https://endoflife.date/api/kuma.json");
  const kumaInfo = (await kumaInfoResponse.json()) as z.infer<
    typeof GetKumaResponse200Schema
  >;
  return c.json(kumaInfo, 200);
};
