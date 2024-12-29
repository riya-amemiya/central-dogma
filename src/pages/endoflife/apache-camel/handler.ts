import type { endoflifeApacheCamelRoute } from "./route";
import type { GetApacheCamelResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheCamelHandler: RouteHandler<
  typeof endoflifeApacheCamelRoute
> = async (c) => {
  const apacheCamelInfoResponse = await fetch(
    "https://endoflife.date/api/apache-camel.json",
  );
  const apacheCamelInfo = (await apacheCamelInfoResponse.json()) as z.infer<
    typeof GetApacheCamelResponse200Schema
  >;
  return c.json(apacheCamelInfo, 200);
};
