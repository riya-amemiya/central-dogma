import type { endoflifeOpenbsdRoute } from "./route";
import type { GetOpenbsdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpenbsdHandler: RouteHandler<
  typeof endoflifeOpenbsdRoute
> = async (c) => {
  const openbsdInfoResponse = await fetch(
    "https://endoflife.date/api/openbsd.json",
  );
  const openbsdInfo = (await openbsdInfoResponse.json()) as z.infer<
    typeof GetOpenbsdResponse200Schema
  >;
  return c.json(openbsdInfo, 200);
};
