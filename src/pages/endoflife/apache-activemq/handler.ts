import type { endoflifeApacheActivemqRoute } from "./route";
import type { GetApacheActivemqResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheActivemqHandler: RouteHandler<
  typeof endoflifeApacheActivemqRoute
> = async (c) => {
  const apacheActivemqInfoResponse = await fetch(
    "https://endoflife.date/api/apache-activemq.json",
  );
  const apacheActivemqInfo =
    (await apacheActivemqInfoResponse.json()) as z.infer<
      typeof GetApacheActivemqResponse200Schema
    >;
  return c.json(apacheActivemqInfo, 200);
};
