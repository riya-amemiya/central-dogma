import type { endoflifeDotnetfxRoute } from "./route";
import type { GetDotnetfxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDotnetfxHandler: RouteHandler<
  typeof endoflifeDotnetfxRoute
> = async (c) => {
  const dotnetfxInfoResponse = await fetch(
    "https://endoflife.date/api/dotnetfx.json",
  );
  const dotnetfxInfo = (await dotnetfxInfoResponse.json()) as z.infer<
    typeof GetDotnetfxResponse200Schema
  >;
  return c.json(dotnetfxInfo, 200);
};
