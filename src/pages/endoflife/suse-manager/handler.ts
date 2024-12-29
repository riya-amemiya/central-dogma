import type { endoflifeSuseManagerRoute } from "./route";
import type { GetSuseManagerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSuseManagerHandler: RouteHandler<
  typeof endoflifeSuseManagerRoute
> = async (c) => {
  const suseManagerInfoResponse = await fetch(
    "https://endoflife.date/api/suse-manager.json",
  );
  const suseManagerInfo = (await suseManagerInfoResponse.json()) as z.infer<
    typeof GetSuseManagerResponse200Schema
  >;
  return c.json(suseManagerInfo, 200);
};
