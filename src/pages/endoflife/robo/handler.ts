import type { endoflifeRoboRoute } from "./route";
import type { GetRoboResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRoboHandler: RouteHandler<
  typeof endoflifeRoboRoute
> = async (c) => {
  const roboInfoResponse = await fetch("https://endoflife.date/api/robo.json");
  const roboInfo = (await roboInfoResponse.json()) as z.infer<
    typeof GetRoboResponse200Schema
  >;
  return c.json(roboInfo, 200);
};
