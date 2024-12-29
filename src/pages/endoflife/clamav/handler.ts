import type { endoflifeClamavRoute } from "./route";
import type { GetClamavResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeClamavHandler: RouteHandler<
  typeof endoflifeClamavRoute
> = async (c) => {
  const clamavInfoResponse = await fetch(
    "https://endoflife.date/api/clamav.json",
  );
  const clamavInfo = (await clamavInfoResponse.json()) as z.infer<
    typeof GetClamavResponse200Schema
  >;
  return c.json(clamavInfo, 200);
};
