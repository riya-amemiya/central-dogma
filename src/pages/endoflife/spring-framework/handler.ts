import type { endoflifeSpringFrameworkRoute } from "./route";
import type { GetSpringFrameworkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSpringFrameworkHandler: RouteHandler<
  typeof endoflifeSpringFrameworkRoute
> = async (c) => {
  const springFrameworkInfoResponse = await fetch(
    "https://endoflife.date/api/spring-framework.json",
  );
  const springFrameworkInfo =
    (await springFrameworkInfoResponse.json()) as z.infer<
      typeof GetSpringFrameworkResponse200Schema
    >;
  return c.json(springFrameworkInfo, 200);
};
