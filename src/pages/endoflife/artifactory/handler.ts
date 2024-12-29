import type { endoflifeArtifactoryRoute } from "./route";
import type { GetArtifactoryResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeArtifactoryHandler: RouteHandler<
  typeof endoflifeArtifactoryRoute
> = async (c) => {
  const artifactoryInfoResponse = await fetch(
    "https://endoflife.date/api/artifactory.json",
  );
  const artifactoryInfo = (await artifactoryInfoResponse.json()) as z.infer<
    typeof GetArtifactoryResponse200Schema
  >;
  return c.json(artifactoryInfo, 200);
};
