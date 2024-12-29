import type { endoflifeGraylogRoute } from "./route";
import type { GetGraylogResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGraylogHandler: RouteHandler<
  typeof endoflifeGraylogRoute
> = async (c) => {
  const graylogInfoResponse = await fetch(
    "https://endoflife.date/api/graylog.json",
  );
  const graylogInfo = (await graylogInfoResponse.json()) as z.infer<
    typeof GetGraylogResponse200Schema
  >;
  return c.json(graylogInfo, 200);
};
