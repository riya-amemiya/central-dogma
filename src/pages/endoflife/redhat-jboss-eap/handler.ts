import type { endoflifeRedhatJbossEapRoute } from "./route";
import type { GetRedhatJbossEapResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRedhatJbossEapHandler: RouteHandler<
  typeof endoflifeRedhatJbossEapRoute
> = async (c) => {
  const redhatJbossEapInfoResponse = await fetch(
    "https://endoflife.date/api/redhat-jboss-eap.json",
  );
  const redhatJbossEapInfo =
    (await redhatJbossEapInfoResponse.json()) as z.infer<
      typeof GetRedhatJbossEapResponse200Schema
    >;
  return c.json(redhatJbossEapInfo, 200);
};
