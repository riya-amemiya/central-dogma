import type { endoflifeEurolinuxRoute } from "./route";
import type { GetEurolinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEurolinuxHandler: RouteHandler<
  typeof endoflifeEurolinuxRoute
> = async (c) => {
  const eurolinuxInfoResponse = await fetch(
    "https://endoflife.date/api/eurolinux.json",
  );
  const eurolinuxInfo = (await eurolinuxInfoResponse.json()) as z.infer<
    typeof GetEurolinuxResponse200Schema
  >;
  return c.json(eurolinuxInfo, 200);
};
