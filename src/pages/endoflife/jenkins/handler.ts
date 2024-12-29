import type { endoflifeJenkinsRoute } from "./route";
import type { GetJenkinsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJenkinsHandler: RouteHandler<
  typeof endoflifeJenkinsRoute
> = async (c) => {
  const jenkinsInfoResponse = await fetch(
    "https://endoflife.date/api/jenkins.json",
  );
  const jenkinsInfo = (await jenkinsInfoResponse.json()) as z.infer<
    typeof GetJenkinsResponse200Schema
  >;
  return c.json(jenkinsInfo, 200);
};
