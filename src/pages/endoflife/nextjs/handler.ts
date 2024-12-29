import type { endoflifeNextjsRoute } from "./route";
import type { GetNextjsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNextjsHandler: RouteHandler<
  typeof endoflifeNextjsRoute
> = async (c) => {
  const nextjsInfoResponse = await fetch(
    "https://endoflife.date/api/nextjs.json",
  );
  const nextjsInfo = (await nextjsInfoResponse.json()) as z.infer<
    typeof GetNextjsResponse200Schema
  >;
  return c.json(nextjsInfo, 200);
};
