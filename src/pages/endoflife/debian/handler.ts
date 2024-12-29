import type { endoflifeDebianRoute } from "./route";
import type { GetDebianResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDebianHandler: RouteHandler<
  typeof endoflifeDebianRoute
> = async (c) => {
  const debianInfoResponse = await fetch(
    "https://endoflife.date/api/debian.json",
  );
  const debianInfo = (await debianInfoResponse.json()) as z.infer<
    typeof GetDebianResponse200Schema
  >;
  return c.json(debianInfo, 200);
};
