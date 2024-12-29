import type { endoflifeSplunkRoute } from "./route";
import type { GetSplunkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSplunkHandler: RouteHandler<
  typeof endoflifeSplunkRoute
> = async (c) => {
  const splunkInfoResponse = await fetch(
    "https://endoflife.date/api/splunk.json",
  );
  const splunkInfo = (await splunkInfoResponse.json()) as z.infer<
    typeof GetSplunkResponse200Schema
  >;
  return c.json(splunkInfo, 200);
};
