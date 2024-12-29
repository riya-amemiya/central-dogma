import type { endoflifeRockyLinuxRoute } from "./route";
import type { GetRockyLinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRockyLinuxHandler: RouteHandler<
  typeof endoflifeRockyLinuxRoute
> = async (c) => {
  const rockyLinuxInfoResponse = await fetch(
    "https://endoflife.date/api/rocky-linux.json",
  );
  const rockyLinuxInfo = (await rockyLinuxInfoResponse.json()) as z.infer<
    typeof GetRockyLinuxResponse200Schema
  >;
  return c.json(rockyLinuxInfo, 200);
};
