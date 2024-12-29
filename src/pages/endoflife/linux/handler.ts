import type { endoflifeLinuxRoute } from "./route";
import type { GetLinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLinuxHandler: RouteHandler<
  typeof endoflifeLinuxRoute
> = async (c) => {
  const linuxInfoResponse = await fetch(
    "https://endoflife.date/api/linux.json",
  );
  const linuxInfo = (await linuxInfoResponse.json()) as z.infer<
    typeof GetLinuxResponse200Schema
  >;
  return c.json(linuxInfo, 200);
};
