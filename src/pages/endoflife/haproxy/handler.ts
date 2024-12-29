import type { endoflifeHaproxyRoute } from "./route";
import type { GetHaproxyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeHaproxyHandler: RouteHandler<
  typeof endoflifeHaproxyRoute
> = async (c) => {
  const haproxyInfoResponse = await fetch(
    "https://endoflife.date/api/haproxy.json",
  );
  const haproxyInfo = (await haproxyInfoResponse.json()) as z.infer<
    typeof GetHaproxyResponse200Schema
  >;
  return c.json(haproxyInfo, 200);
};
