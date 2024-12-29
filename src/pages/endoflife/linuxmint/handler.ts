import type { endoflifeLinuxmintRoute } from "./route";
import type { GetLinuxmintResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLinuxmintHandler: RouteHandler<
  typeof endoflifeLinuxmintRoute
> = async (c) => {
  const linuxmintInfoResponse = await fetch(
    "https://endoflife.date/api/linuxmint.json",
  );
  const linuxmintInfo = (await linuxmintInfoResponse.json()) as z.infer<
    typeof GetLinuxmintResponse200Schema
  >;
  return c.json(linuxmintInfo, 200);
};
