import type { endoflifeAlpineRoute } from "./route";
import type { GetAlpineResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAlpineHandler: RouteHandler<
  typeof endoflifeAlpineRoute
> = async (c) => {
  const alpineInfoResponse = await fetch(
    "https://endoflife.date/api/alpine.json",
  );
  const alpineInfo = (await alpineInfoResponse.json()) as z.infer<
    typeof GetAlpineResponse200Schema
  >;
  return c.json(alpineInfo, 200);
};
