import type { endoflifeNextcloudRoute } from "./route";
import type { GetNextcloudResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNextcloudHandler: RouteHandler<
  typeof endoflifeNextcloudRoute
> = async (c) => {
  const nextcloudInfoResponse = await fetch(
    "https://endoflife.date/api/nextcloud.json",
  );
  const nextcloudInfo = (await nextcloudInfoResponse.json()) as z.infer<
    typeof GetNextcloudResponse200Schema
  >;
  return c.json(nextcloudInfo, 200);
};
