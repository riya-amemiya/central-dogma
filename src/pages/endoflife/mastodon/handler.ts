import type { endoflifeMastodonRoute } from "./route";
import type { GetMastodonResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMastodonHandler: RouteHandler<
  typeof endoflifeMastodonRoute
> = async (c) => {
  const mastodonInfoResponse = await fetch(
    "https://endoflife.date/api/mastodon.json",
  );
  const mastodonInfo = (await mastodonInfoResponse.json()) as z.infer<
    typeof GetMastodonResponse200Schema
  >;
  return c.json(mastodonInfo, 200);
};
