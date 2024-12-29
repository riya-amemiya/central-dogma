import type { endoflifeGitlabRoute } from "./route";
import type { GetGitlabResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGitlabHandler: RouteHandler<
  typeof endoflifeGitlabRoute
> = async (c) => {
  const gitlabInfoResponse = await fetch(
    "https://endoflife.date/api/gitlab.json",
  );
  const gitlabInfo = (await gitlabInfoResponse.json()) as z.infer<
    typeof GetGitlabResponse200Schema
  >;
  return c.json(gitlabInfo, 200);
};
