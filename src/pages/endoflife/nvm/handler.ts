import type { endoflifeNvmRoute } from "./route";
import type { GetNvmResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNvmHandler: RouteHandler<
  typeof endoflifeNvmRoute
> = async (c) => {
  const nvmInfoResponse = await fetch("https://endoflife.date/api/nvm.json");
  const nvmInfo = (await nvmInfoResponse.json()) as z.infer<
    typeof GetNvmResponse200Schema
  >;
  return c.json(nvmInfo, 200);
};
