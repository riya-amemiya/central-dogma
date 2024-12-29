import type { endoflifeDjangoRoute } from "./route";
import type { GetDjangoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDjangoHandler: RouteHandler<
  typeof endoflifeDjangoRoute
> = async (c) => {
  const djangoInfoResponse = await fetch(
    "https://endoflife.date/api/django.json",
  );
  const djangoInfo = (await djangoInfoResponse.json()) as z.infer<
    typeof GetDjangoResponse200Schema
  >;
  return c.json(djangoInfo, 200);
};
