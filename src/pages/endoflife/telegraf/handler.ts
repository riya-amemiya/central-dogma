import type { endoflifeTelegrafRoute } from "./route";
import type { GetTelegrafResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTelegrafHandler: RouteHandler<
  typeof endoflifeTelegrafRoute
> = async (c) => {
  const telegrafInfoResponse = await fetch(
    "https://endoflife.date/api/telegraf.json",
  );
  const telegrafInfo = (await telegrafInfoResponse.json()) as z.infer<
    typeof GetTelegrafResponse200Schema
  >;
  return c.json(telegrafInfo, 200);
};
