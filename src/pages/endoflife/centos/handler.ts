import type { endoflifeCentosRoute } from "./route";
import type { GetCentosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCentosHandler: RouteHandler<
  typeof endoflifeCentosRoute
> = async (c) => {
  const centosInfoResponse = await fetch(
    "https://endoflife.date/api/centos.json",
  );
  const centosInfo = (await centosInfoResponse.json()) as z.infer<
    typeof GetCentosResponse200Schema
  >;
  return c.json(centosInfo, 200);
};
