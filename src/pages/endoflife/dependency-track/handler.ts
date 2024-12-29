import type { endoflifeDependencyTrackRoute } from "./route";
import type { GetDependencyTrackResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDependencyTrackHandler: RouteHandler<
  typeof endoflifeDependencyTrackRoute
> = async (c) => {
  const dependencyTrackInfoResponse = await fetch(
    "https://endoflife.date/api/dependency-track.json",
  );
  const dependencyTrackInfo =
    (await dependencyTrackInfoResponse.json()) as z.infer<
      typeof GetDependencyTrackResponse200Schema
    >;
  return c.json(dependencyTrackInfo, 200);
};
