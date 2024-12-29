import type { endoflifeUnrealircdRoute } from "./route";
import type { GetUnrealircdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeUnrealircdHandler: RouteHandler<
  typeof endoflifeUnrealircdRoute
> = async (c) => {
  const unrealircdInfoResponse = await fetch(
    "https://endoflife.date/api/unrealircd.json",
  );
  const unrealircdInfo = (await unrealircdInfoResponse.json()) as z.infer<
    typeof GetUnrealircdResponse200Schema
  >;
  return c.json(unrealircdInfo, 200);
};
