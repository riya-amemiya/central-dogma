import type { endoflifeJhipsterRoute } from "./route";
import type { GetJhipsterResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJhipsterHandler: RouteHandler<
  typeof endoflifeJhipsterRoute
> = async (c) => {
  const jhipsterInfoResponse = await fetch(
    "https://endoflife.date/api/jhipster.json",
  );
  const jhipsterInfo = (await jhipsterInfoResponse.json()) as z.infer<
    typeof GetJhipsterResponse200Schema
  >;
  return c.json(jhipsterInfo, 200);
};
