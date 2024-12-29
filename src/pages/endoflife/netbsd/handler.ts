import type { endoflifeNetbsdRoute } from "./route";
import type { GetNetbsdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNetbsdHandler: RouteHandler<
  typeof endoflifeNetbsdRoute
> = async (c) => {
  const netbsdInfoResponse = await fetch(
    "https://endoflife.date/api/netbsd.json",
  );
  const netbsdInfo = (await netbsdInfoResponse.json()) as z.infer<
    typeof GetNetbsdResponse200Schema
  >;
  return c.json(netbsdInfo, 200);
};
