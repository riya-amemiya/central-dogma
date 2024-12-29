import type { endoflifeSlackwareRoute } from "./route";
import type { GetSlackwareResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSlackwareHandler: RouteHandler<
  typeof endoflifeSlackwareRoute
> = async (c) => {
  const slackwareInfoResponse = await fetch(
    "https://endoflife.date/api/slackware.json",
  );
  const slackwareInfo = (await slackwareInfoResponse.json()) as z.infer<
    typeof GetSlackwareResponse200Schema
  >;
  return c.json(slackwareInfo, 200);
};
