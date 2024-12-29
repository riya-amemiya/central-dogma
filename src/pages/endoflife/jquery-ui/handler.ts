import type { endoflifeJqueryUiRoute } from "./route";
import type { GetJqueryUiResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeJqueryUiHandler: RouteHandler<
  typeof endoflifeJqueryUiRoute
> = async (c) => {
  const jqueryUiInfoResponse = await fetch(
    "https://endoflife.date/api/jquery-ui.json",
  );
  const jqueryUiInfo = (await jqueryUiInfoResponse.json()) as z.infer<
    typeof GetJqueryUiResponse200Schema
  >;
  return c.json(jqueryUiInfo, 200);
};
