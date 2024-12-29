import type { endoflifeMacosRoute } from "./route";
import type { GetMacosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMacosHandler: RouteHandler<
  typeof endoflifeMacosRoute
> = async (c) => {
  const macosInfoResponse = await fetch(
    "https://endoflife.date/api/macos.json",
  );
  const macosInfo = (await macosInfoResponse.json()) as z.infer<
    typeof GetMacosResponse200Schema
  >;
  return c.json(macosInfo, 200);
};
