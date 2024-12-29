import type { endoflifeSamsungMobileRoute } from "./route";
import type { GetSamsungMobileResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSamsungMobileHandler: RouteHandler<
  typeof endoflifeSamsungMobileRoute
> = async (c) => {
  const samsungMobileInfoResponse = await fetch(
    "https://endoflife.date/api/samsung-mobile.json",
  );
  const samsungMobileInfo = (await samsungMobileInfoResponse.json()) as z.infer<
    typeof GetSamsungMobileResponse200Schema
  >;
  return c.json(samsungMobileInfo, 200);
};
