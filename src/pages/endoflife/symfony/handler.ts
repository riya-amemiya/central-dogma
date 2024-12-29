import type { endoflifeSymfonyRoute } from "./route";
import type { GetSymfonyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSymfonyHandler: RouteHandler<
  typeof endoflifeSymfonyRoute
> = async (c) => {
  const symfonyInfoResponse = await fetch(
    "https://endoflife.date/api/symfony.json",
  );
  const symfonyInfo = (await symfonyInfoResponse.json()) as z.infer<
    typeof GetSymfonyResponse200Schema
  >;
  return c.json(symfonyInfo, 200);
};
