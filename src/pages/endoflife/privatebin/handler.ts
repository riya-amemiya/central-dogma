import type { endoflifePrivatebinRoute } from "./route";
import type { GetPrivatebinResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePrivatebinHandler: RouteHandler<
  typeof endoflifePrivatebinRoute
> = async (c) => {
  const privatebinInfoResponse = await fetch(
    "https://endoflife.date/api/privatebin.json",
  );
  const privatebinInfo = (await privatebinInfoResponse.json()) as z.infer<
    typeof GetPrivatebinResponse200Schema
  >;
  return c.json(privatebinInfo, 200);
};
