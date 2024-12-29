import type { endoflifeUbuntuRoute } from "./route";
import type { GetUbuntuResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeUbuntuHandler: RouteHandler<
  typeof endoflifeUbuntuRoute
> = async (c) => {
  const ubuntuInfoResponse = await fetch(
    "https://endoflife.date/api/ubuntu.json",
  );
  const ubuntuInfo = (await ubuntuInfoResponse.json()) as z.infer<
    typeof GetUbuntuResponse200Schema
  >;
  return c.json(ubuntuInfo, 200);
};
