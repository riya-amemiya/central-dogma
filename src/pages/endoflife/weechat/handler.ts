import type { endoflifeWeechatRoute } from "./route";
import type { GetWeechatResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWeechatHandler: RouteHandler<
  typeof endoflifeWeechatRoute
> = async (c) => {
  const weechatInfoResponse = await fetch(
    "https://endoflife.date/api/weechat.json",
  );
  const weechatInfo = (await weechatInfoResponse.json()) as z.infer<
    typeof GetWeechatResponse200Schema
  >;
  return c.json(weechatInfo, 200);
};
