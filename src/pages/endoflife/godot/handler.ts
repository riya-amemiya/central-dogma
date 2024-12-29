import type { endoflifeGodotRoute } from "./route";
import type { GetGodotResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGodotHandler: RouteHandler<
  typeof endoflifeGodotRoute
> = async (c) => {
  const godotInfoResponse = await fetch(
    "https://endoflife.date/api/godot.json",
  );
  const godotInfo = (await godotInfoResponse.json()) as z.infer<
    typeof GetGodotResponse200Schema
  >;
  return c.json(godotInfo, 200);
};
