import type { endoflifeRos2Route } from "./route";
import type { GetRos2Response200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRos2Handler: RouteHandler<
  typeof endoflifeRos2Route
> = async (c) => {
  const ros2InfoResponse = await fetch("https://endoflife.date/api/ros-2.json");
  const ros2Info = (await ros2InfoResponse.json()) as z.infer<
    typeof GetRos2Response200Schema
  >;
  return c.json(ros2Info, 200);
};
