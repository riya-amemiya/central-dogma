import type { endoflifeCkeditorRoute } from "./route";
import type { GetCkeditorResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCkeditorHandler: RouteHandler<
  typeof endoflifeCkeditorRoute
> = async (c) => {
  const ckeditorInfoResponse = await fetch(
    "https://endoflife.date/api/ckeditor.json",
  );
  const ckeditorInfo = (await ckeditorInfoResponse.json()) as z.infer<
    typeof GetCkeditorResponse200Schema
  >;
  return c.json(ckeditorInfo, 200);
};
