import type { endoflifeLuaRoute } from "./route";
import type { GetLuaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLuaHandler: RouteHandler<
  typeof endoflifeLuaRoute
> = async (c) => {
  const luaInfoResponse = await fetch("https://endoflife.date/api/lua.json");
  const luaInfo = (await luaInfoResponse.json()) as z.infer<
    typeof GetLuaResponse200Schema
  >;
  return c.json(luaInfo, 200);
};
