import type { endoflifeRocketChatRoute } from "./route";
import type { GetRocketChatResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRocketChatHandler: RouteHandler<
  typeof endoflifeRocketChatRoute
> = async (c) => {
  const rocketChatInfoResponse = await fetch(
    "https://endoflife.date/api/rocket-chat.json",
  );
  const rocketChatInfo = (await rocketChatInfoResponse.json()) as z.infer<
    typeof GetRocketChatResponse200Schema
  >;
  return c.json(rocketChatInfo, 200);
};
