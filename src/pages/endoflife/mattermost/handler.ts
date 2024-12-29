import type { endoflifeMattermostRoute } from "./route";
import type { GetMattermostResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMattermostHandler: RouteHandler<
  typeof endoflifeMattermostRoute
> = async (c) => {
  const mattermostInfoResponse = await fetch(
    "https://endoflife.date/api/mattermost.json",
  );
  const mattermostInfo = (await mattermostInfoResponse.json()) as z.infer<
    typeof GetMattermostResponse200Schema
  >;
  return c.json(mattermostInfo, 200);
};
