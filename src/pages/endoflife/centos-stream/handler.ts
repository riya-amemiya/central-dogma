import type { endoflifeCentosStreamRoute } from "./route";
import type { GetCentosStreamResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCentosStreamHandler: RouteHandler<
  typeof endoflifeCentosStreamRoute
> = async (c) => {
  const centosStreamInfoResponse = await fetch(
    "https://endoflife.date/api/centos-stream.json",
  );
  const centosStreamInfo = (await centosStreamInfoResponse.json()) as z.infer<
    typeof GetCentosStreamResponse200Schema
  >;
  return c.json(centosStreamInfo, 200);
};
