import type { endoflifeCfengineRoute } from "./route";
import type { GetCfengineResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCfengineHandler: RouteHandler<
  typeof endoflifeCfengineRoute
> = async (c) => {
  const cfengineInfoResponse = await fetch(
    "https://endoflife.date/api/cfengine.json",
  );
  const cfengineInfo = (await cfengineInfoResponse.json()) as z.infer<
    typeof GetCfengineResponse200Schema
  >;
  return c.json(cfengineInfo, 200);
};
