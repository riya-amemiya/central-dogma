import type { endoflifeIonicRoute } from "./route";
import type { GetIonicResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIonicHandler: RouteHandler<
  typeof endoflifeIonicRoute
> = async (c) => {
  const ionicInfoResponse = await fetch(
    "https://endoflife.date/api/ionic.json",
  );
  const ionicInfo = (await ionicInfoResponse.json()) as z.infer<
    typeof GetIonicResponse200Schema
  >;
  return c.json(ionicInfo, 200);
};
