import type { endoflifeFairphoneRoute } from "./route";
import type { GetFairphoneResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFairphoneHandler: RouteHandler<
  typeof endoflifeFairphoneRoute
> = async (c) => {
  const fairphoneInfoResponse = await fetch(
    "https://endoflife.date/api/fairphone.json",
  );
  const fairphoneInfo = (await fairphoneInfoResponse.json()) as z.infer<
    typeof GetFairphoneResponse200Schema
  >;
  return c.json(fairphoneInfo, 200);
};
