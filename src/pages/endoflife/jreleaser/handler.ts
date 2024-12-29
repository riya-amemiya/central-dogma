import type { endoflifeJreleaserRoute } from "./route";
import type { GetJreleaserResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJreleaserHandler: RouteHandler<
  typeof endoflifeJreleaserRoute
> = async (c) => {
  const jreleaserInfoResponse = await fetch(
    "https://endoflife.date/api/jreleaser.json",
  );
  const jreleaserInfo = (await jreleaserInfoResponse.json()) as z.infer<
    typeof GetJreleaserResponse200Schema
  >;
  return c.json(jreleaserInfo, 200);
};
