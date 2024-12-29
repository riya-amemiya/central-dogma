import type { endoflifePostfixRoute } from "./route";
import type { GetPostfixResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePostfixHandler: RouteHandler<
  typeof endoflifePostfixRoute
> = async (c) => {
  const postfixInfoResponse = await fetch(
    "https://endoflife.date/api/postfix.json",
  );
  const postfixInfo = (await postfixInfoResponse.json()) as z.infer<
    typeof GetPostfixResponse200Schema
  >;
  return c.json(postfixInfo, 200);
};
