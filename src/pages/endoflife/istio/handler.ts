import type { endoflifeIstioRoute } from "./route";
import type { GetIstioResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIstioHandler: RouteHandler<
  typeof endoflifeIstioRoute
> = async (c) => {
  const istioInfoResponse = await fetch(
    "https://endoflife.date/api/istio.json",
  );
  const istioInfo = (await istioInfoResponse.json()) as z.infer<
    typeof GetIstioResponse200Schema
  >;
  return c.json(istioInfo, 200);
};
