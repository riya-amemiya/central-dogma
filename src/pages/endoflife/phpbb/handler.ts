import type { endoflifePhpbbRoute } from "./route";
import type { GetPhpbbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePhpbbHandler: RouteHandler<
  typeof endoflifePhpbbRoute
> = async (c) => {
  const phpbbInfoResponse = await fetch(
    "https://endoflife.date/api/phpbb.json",
  );
  const phpbbInfo = (await phpbbInfoResponse.json()) as z.infer<
    typeof GetPhpbbResponse200Schema
  >;
  return c.json(phpbbInfo, 200);
};
