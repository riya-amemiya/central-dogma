import type { endoflifeComposerRoute } from "./route";
import type { GetComposerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeComposerHandler: RouteHandler<
  typeof endoflifeComposerRoute
> = async (c) => {
  const composerInfoResponse = await fetch(
    "https://endoflife.date/api/composer.json",
  );
  const composerInfo = (await composerInfoResponse.json()) as z.infer<
    typeof GetComposerResponse200Schema
  >;
  return c.json(composerInfo, 200);
};
