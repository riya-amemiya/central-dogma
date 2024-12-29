import type { endoflifeQuarkusFrameworkRoute } from "./route";
import type { GetQuarkusFrameworkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeQuarkusFrameworkHandler: RouteHandler<
  typeof endoflifeQuarkusFrameworkRoute
> = async (c) => {
  const quarkusFrameworkInfoResponse = await fetch(
    "https://endoflife.date/api/quarkus-framework.json",
  );
  const quarkusFrameworkInfo =
    (await quarkusFrameworkInfoResponse.json()) as z.infer<
      typeof GetQuarkusFrameworkResponse200Schema
    >;
  return c.json(quarkusFrameworkInfo, 200);
};
