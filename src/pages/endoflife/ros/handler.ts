import type { endoflifeRosRoute } from "./route";
import type { GetRosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRosHandler: RouteHandler<
  typeof endoflifeRosRoute
> = async (c) => {
  const rosInfoResponse = await fetch("https://endoflife.date/api/ros.json");
  const rosInfo = (await rosInfoResponse.json()) as z.infer<
    typeof GetRosResponse200Schema
  >;
  return c.json(rosInfo, 200);
};
