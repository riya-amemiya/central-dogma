import type { endoflifeJiraSoftwareRoute } from "./route";
import type { GetJiraSoftwareResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJiraSoftwareHandler: RouteHandler<
  typeof endoflifeJiraSoftwareRoute
> = async (c) => {
  const jiraSoftwareInfoResponse = await fetch(
    "https://endoflife.date/api/jira-software.json",
  );
  const jiraSoftwareInfo = (await jiraSoftwareInfoResponse.json()) as z.infer<
    typeof GetJiraSoftwareResponse200Schema
  >;
  return c.json(jiraSoftwareInfo, 200);
};
