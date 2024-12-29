import type { endoflifeCockroachdbRoute } from "./route";
import type { GetCockroachdbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCockroachdbHandler: RouteHandler<
  typeof endoflifeCockroachdbRoute
> = async (c) => {
  const cockroachdbInfoResponse = await fetch(
    "https://endoflife.date/api/cockroachdb.json",
  );
  const cockroachdbInfo = (await cockroachdbInfoResponse.json()) as z.infer<
    typeof GetCockroachdbResponse200Schema
  >;
  return c.json(cockroachdbInfo, 200);
};
