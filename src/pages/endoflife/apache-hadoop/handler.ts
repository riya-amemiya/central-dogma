import type { endoflifeApacheHadoopRoute } from "./route";
import type { GetApacheHadoopResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheHadoopHandler: RouteHandler<
  typeof endoflifeApacheHadoopRoute
> = async (c) => {
  const apacheHadoopInfoResponse = await fetch(
    "https://endoflife.date/api/apache-hadoop.json",
  );
  const apacheHadoopInfo = (await apacheHadoopInfoResponse.json()) as z.infer<
    typeof GetApacheHadoopResponse200Schema
  >;
  return c.json(apacheHadoopInfo, 200);
};
