import type { endoflifeOpenzfsRoute } from "./route";
import type { GetOpenzfsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOpenzfsHandler: RouteHandler<
  typeof endoflifeOpenzfsRoute
> = async (c) => {
  const openzfsInfoResponse = await fetch(
    "https://endoflife.date/api/openzfs.json",
  );
  const openzfsInfo = (await openzfsInfoResponse.json()) as z.infer<
    typeof GetOpenzfsResponse200Schema
  >;
  return c.json(openzfsInfo, 200);
};
