import type { endoflifeApacheFlinkRoute } from "./route";
import type { GetApacheFlinkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheFlinkHandler: RouteHandler<
  typeof endoflifeApacheFlinkRoute
> = async (c) => {
  const apacheFlinkInfoResponse = await fetch(
    "https://endoflife.date/api/apache-flink.json",
  );
  const apacheFlinkInfo = (await apacheFlinkInfoResponse.json()) as z.infer<
    typeof GetApacheFlinkResponse200Schema
  >;
  return c.json(apacheFlinkInfo, 200);
};
