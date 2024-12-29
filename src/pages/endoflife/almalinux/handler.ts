import type { endoflifeAlmalinuxRoute } from "./route";
import type { GetAlmalinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAlmalinuxHandler: RouteHandler<
  typeof endoflifeAlmalinuxRoute
> = async (c) => {
  const almalinuxInfoResponse = await fetch(
    "https://endoflife.date/api/almalinux.json",
  );
  const almalinuxInfo = (await almalinuxInfoResponse.json()) as z.infer<
    typeof GetAlmalinuxResponse200Schema
  >;
  return c.json(almalinuxInfo, 200);
};
