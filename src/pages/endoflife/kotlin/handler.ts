import type { endoflifeKotlinRoute } from "./route";
import type { GetKotlinResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeKotlinHandler: RouteHandler<
  typeof endoflifeKotlinRoute
> = async (c) => {
  const kotlinInfoResponse = await fetch(
    "https://endoflife.date/api/kotlin.json",
  );
  const kotlinInfo = (await kotlinInfoResponse.json()) as z.infer<
    typeof GetKotlinResponse200Schema
  >;
  return c.json(kotlinInfo, 200);
};
